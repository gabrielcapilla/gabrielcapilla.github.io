import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const failures = [];
const updateBaseline = process.argv.includes("--update-baseline");
const baselinePath = path.join(root, "scripts", "source-policy-baseline.json");

const SOURCE_DIRS = [
  "_docs",
  "_includes",
  "_layouts",
  "_pages",
  "_posts",
  "_projects",
  "_sass",
  "assets/js",
];

const HEX_RE = /#[0-9a-fA-F]{3,8}\b/g;
const INLINE_STYLE_RE = /\bstyle\s*=/gi;
const FRONT_MATTER_RE = /^---\n([\s\S]*?)\n---/;
const CSS_VALUE_RE =
  /(?<![-\w])(?:-?\d*\.?\d+)(?:px|rem|em|vh|vw|vmin|vmax|s|ms|%)\b|rgba?\([^)]+\)|#[0-9a-fA-F]{3,8}\b|0\s+\d/gi;

const VENDOR_FILES = new Set(["_sass/1-tools/_splide.scss"]);
const DESIGN_TOKEN_FILES = new Set(["_sass/0-settings/_variables.scss"]);

const SCSS_ALLOWED_NUMERIC = [
  /^0$/,
  /^0%$/,
  /^100%$/,
  /^50%$/,
  /^1$/,
  /^2$/,
  /^3$/,
  /^4$/,
  /^5$/,
  /^10$/,
  /^40%$/,
  /^90deg$/,
  /^180deg$/,
];

const SCSS_ALLOWED_PROPERTIES = new Set([
  "opacity",
  "z-index",
  "font-weight",
  "line-height",
  "aspect-ratio",
  "grid-template-columns",
  "flex",
  "flex-shrink",
  "order",
  "content",
  "view-transition-name",
]);

function rel(file) {
  return path.relative(root, file).replaceAll(path.sep, "/");
}

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function issueKey(file, line, message) {
  return `${rel(file)}:${line}: ${message}`;
}

function record(file, line, message) {
  failures.push(issueKey(file, line, message));
}

function lineNumber(text, index) {
  return text.slice(0, index).split("\n").length;
}

function parseFrontMatter(text) {
  const match = text.match(FRONT_MATTER_RE);
  if (!match) return null;

  const data = {};
  const lines = match[1].split("\n");
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const pair = line.match(/^([A-Za-z0-9_-]+):(?:\s*(.*))?$/);
    if (!pair) continue;

    const [, key, rawValue = ""] = pair;
    const value = rawValue.trim();
    if (value) {
      data[key] = value.replace(/^["']|["']$/g, "");
      continue;
    }

    const block = [];
    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      if (/^\S/.test(lines[cursor])) break;
      block.push(lines[cursor]);
    }
    data[key] = block.length ? "__block__" : "";
  }
  return data;
}

function frontMatterText(text) {
  return text.match(FRONT_MATTER_RE)?.[1] || "";
}

function requireFields(file, data, fields) {
  for (const field of fields) {
    if (!data?.[field]) record(file, 1, `missing required front matter: ${field}`);
  }
}

function requireFrontMatterPath(file, fm, pathName) {
  const parts = pathName.split(".");
  let indent = 0;
  let start = 0;

  for (const part of parts) {
    const pattern = new RegExp(`^ {${indent}}${part}:`, "m");
    const scoped = fm.slice(start);
    const match = scoped.match(pattern);
    if (!match || match.index == null) {
      record(file, 1, `missing required front matter: ${pathName}`);
      return;
    }
    start += match.index + match[0].length;
    indent += 2;
  }
}

function validateProjectLandingContract(file, text) {
  const fm = frontMatterText(text);
  const paths = [
    "landing.enabled",
    "landing.hero.enabled",
    "landing.hero.visible",
    "landing.features.enabled",
    "landing.features.visible",
    "landing.community.enabled",
    "landing.community.visible",
    "landing.install.enabled",
    "landing.install.visible",
    "landing.alternative_install.enabled",
    "landing.alternative_install.visible",
    "hero.visual",
    "hero.show_symbol",
    "hero.title",
    "hero.subtitle",
    "hero.cta_text",
    "hero.cta_link",
    "hero.feature_title",
    "hero.feature_description",
    "features",
    "community",
    "install.title",
    "install.subtitle",
    "install_cmd",
    "install_display_cmd",
    "alternative_install.label",
    "alternative_install.options",
  ];

  for (const pathName of paths) requireFrontMatterPath(file, fm, pathName);
}

function validateProjectDeclarationOrder(file, text) {
  const fm = frontMatterText(text);
  const expectedOrder = [
    "layout",
    "title",
    "display_title",
    "description",
    "permalink",
    "redirect_from",
    "image",
    "seo",
    "status",
    "icon",
    "icon_name",
    "featured",
    "show_on_home",
    "home_order",
    "repository",
    "docs_url",
    "docs_description",
    "landing",
    "hero",
    "features",
    "community",
    "install",
    "install_cmd",
    "install_display_cmd",
    "alternative_install",
  ];
  const seen = fm
    .split("\n")
    .map((line) => line.match(/^([A-Za-z0-9_-]+):/)?.[1])
    .filter(Boolean);

  let lastIndex = -1;
  for (const key of seen) {
    const index = expectedOrder.indexOf(key);
    if (index === -1) continue;
    if (index < lastIndex) {
      record(file, 1, `front matter key out of order: ${key}`);
      return;
    }
    lastIndex = index;
  }
}

function validateFrontMatter(file, text) {
  const r = rel(file);
  if (!r.endsWith(".md") && !r.endsWith(".html")) return;
  if (!/^_(docs|pages|posts|projects)\//.test(r)) return;

  const data = parseFrontMatter(text);
  if (!data) {
    record(file, 1, "missing front matter");
    return;
  }

  if (r.startsWith("_projects/")) {
    requireFields(file, data, [
      "layout",
      "title",
      "display_title",
      "description",
      "image",
      "seo",
      "repository",
      "permalink",
    ]);
    validateProjectLandingContract(file, text);
    validateProjectDeclarationOrder(file, text);
  }

  if (/^_pages\/.+-docs\.md$/.test(r)) {
    requireFields(file, data, [
      "layout",
      "title",
      "description",
      "project",
      "permalink",
      "image",
      "seo",
    ]);
    if (data.layout !== "documentation") {
      record(file, 1, "project docs page must use layout: documentation");
    }
  }

  if (r.startsWith("_docs/")) {
    if (data.published === "false") return;
    requireFields(file, data, ["title", "slug", "project", "category", "order"]);
  }

  if (r.startsWith("_posts/")) {
    requireFields(file, data, [
      "layout",
      "title",
      "description",
      "date",
      "categories",
      "tags",
    ]);
  }
}

function validateInlineStyles(file, text) {
  INLINE_STYLE_RE.lastIndex = 0;
  let match;
  while ((match = INLINE_STYLE_RE.exec(text))) {
    record(file, lineNumber(text, match.index), "inline style attribute is forbidden");
  }
}

function validateHex(file, text) {
  const r = rel(file);
  if (VENDOR_FILES.has(r)) return;
  if (r.startsWith("_posts/")) return;

  let match;
  while ((match = HEX_RE.exec(text))) {
    if (r.endsWith(".md") && text.slice(Math.max(0, match.index - 20), match.index).includes("(")) {
      continue;
    }
    record(file, lineNumber(text, match.index), "use rgb()/rgba() or a design token instead of hex color");
  }
}

function isTokenizedScssValue(value) {
  if (value.includes("var(") || value.includes("#{$")) return true;
  if (SCSS_ALLOWED_NUMERIC.some((pattern) => pattern.test(value))) return true;
  return false;
}

function validateScssValues(file, text) {
  const r = rel(file);
  if (!r.endsWith(".scss")) return;
  if (VENDOR_FILES.has(r) || DESIGN_TOKEN_FILES.has(r)) return;

  const lines = text.split("\n");
  lines.forEach((line, index) => {
    const declaration = line.match(/^\s*([-\w]+)\s*:\s*([^;]+);/);
    if (!declaration) return;

    const [, property, rawValue] = declaration;
    if (SCSS_ALLOWED_PROPERTIES.has(property)) return;
    if (rawValue.includes("url(") || rawValue.includes("calc(")) return;

    CSS_VALUE_RE.lastIndex = 0;
    let match;
    while ((match = CSS_VALUE_RE.exec(rawValue))) {
      const value = match[0].trim();
      if (isTokenizedScssValue(value)) continue;
      record(
        file,
        index + 1,
        `untokenized visual value "${value}" in ${property}; use a design token`,
      );
    }
  });
}

for (const sourceDir of SOURCE_DIRS) {
  for (const file of walk(path.join(root, sourceDir))) {
    if (!/\.(html|md|scss|js)$/.test(file)) continue;
    const text = fs.readFileSync(file, "utf8");
    validateFrontMatter(file, text);
    validateInlineStyles(file, text);
    validateHex(file, text);
    validateScssValues(file, text);
  }
}

if (updateBaseline) {
  fs.writeFileSync(
    baselinePath,
    `${JSON.stringify({ issues: failures.sort() }, null, 2)}\n`,
  );
  console.log(`Wrote ${rel(baselinePath)} with ${failures.length} issues.`);
  process.exit(0);
}

const baseline = fs.existsSync(baselinePath)
  ? new Set(JSON.parse(fs.readFileSync(baselinePath, "utf8")).issues || [])
  : new Set();
const normalizeIssue = (issue) => issue.replace(/^([^:]+):\d+:/, "$1:*:");
const normalizedFailures = new Set(failures.map(normalizeIssue));
const normalizedBaseline = new Set([...baseline].map(normalizeIssue));
const newFailures = failures.filter(
  (failure) => !normalizedBaseline.has(normalizeIssue(failure)),
);
const resolvedFailures = [...baseline].filter(
  (failure) => !normalizedFailures.has(normalizeIssue(failure)),
);

if (newFailures.length || resolvedFailures.length) {
  if (newFailures.length) {
    console.error("New source policy violations:");
    console.error(newFailures.join("\n"));
  }
  if (resolvedFailures.length) {
    console.error("Baseline contains resolved violations; run npm run validate:source:update.");
    console.error(resolvedFailures.join("\n"));
  }
  process.exit(1);
}

console.log(`Source validation passed. Baseline issues: ${baseline.size}.`);
