import fs from "node:fs/promises";
import path from "node:path";
import { minify } from "terser";
import { PurgeCSS } from "purgecss";

const root = process.cwd();
const siteDir = path.join(root, "_site");
const cssPath = path.join(siteDir, "assets/css/styles.css");
const jsPaths = [
  path.join(siteDir, "assets/js/reframe.js"),
  path.join(siteDir, "assets/js/main.js"),
];

const safelist = {
  standard: [
    "active",
    "show",
    "reframed",
    "is-command",
    "is-active",
    "is-open",
    "is-visible",
    "hidden-mobile",
    "hidden-desktop",
    "text-muted",
    "text-muted-darker",
    "text-white",
  ],
  deep: [
    /^splide/,
    /^is-/,
    /^has-/,
    /^syntax-/,
    /^code-/,
    /^gallery-/,
    /^image-slider/,
    /^post-content/,
    /^doc-section/,
    /^status-badge/,
  ],
  greedy: [
    /highlight/,
    /language-/,
    /rouge-/,
    /token/,
  ],
};

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir, predicate, out = []) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(filePath, predicate, out);
    } else if (predicate(filePath)) {
      out.push(filePath);
    }
  }
  return out;
}

function bytes(n) {
  return `${(n / 1024).toFixed(1)} KiB`;
}

async function optimizeCss() {
  if (!(await exists(cssPath))) return null;

  const before = (await fs.stat(cssPath)).size;
  const content = [
    ...(await walk(siteDir, (file) => file.endsWith(".html"))),
    ...(await walk(path.join(siteDir, "assets/js"), (file) => file.endsWith(".js"))),
  ];

  const [result] = await new PurgeCSS().purge({
    content,
    css: [cssPath],
    safelist,
    fontFace: true,
    keyframes: true,
    variables: false,
  });

  await fs.writeFile(cssPath, result.css);
  const after = (await fs.stat(cssPath)).size;
  return { file: path.relative(root, cssPath), before, after };
}

async function optimizeJs(filePath) {
  if (!(await exists(filePath))) return null;

  const input = await fs.readFile(filePath, "utf8");
  const before = Buffer.byteLength(input);
  const result = await minify(input, {
    compress: {
      passes: 2,
      pure_getters: true,
    },
    mangle: true,
    format: {
      comments: false,
    },
  });

  if (!result.code) {
    throw new Error(`Terser produced empty output for ${filePath}`);
  }

  await fs.writeFile(filePath, `${result.code}\n`);
  const after = (await fs.stat(filePath)).size;
  return { file: path.relative(root, filePath), before, after };
}

const results = [];
results.push(await optimizeCss());
for (const jsPath of jsPaths) results.push(await optimizeJs(jsPath));

for (const result of results.filter(Boolean)) {
  const saved = result.before - result.after;
  console.log(
    `${result.file}: ${bytes(result.before)} -> ${bytes(result.after)} saved ${bytes(saved)}`,
  );
}
