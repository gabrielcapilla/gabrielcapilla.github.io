import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

const root = process.cwd();
const outDir = path.join(root, "reports", "lighthouse");
const chromePath = process.env.CHROME_PATH || "/usr/bin/helium-browser";
const baseUrl = process.env.BENCHMARK_BASE_URL || "http://127.0.0.1:4010";
const pages = [
  { name: "home", path: "/" },
  { name: "dotman", path: "/projects/dotman/" },
  { name: "parun", path: "/projects/parun/" },
  { name: "dotman-docs", path: "/projects/dotman/docs/" },
  { name: "parun-docs", path: "/projects/parun/docs/" },
  { name: "writing", path: "/writing/" },
  { name: "elements", path: "/elements/" },
  { name: "elements-post", path: "/announcement/2026/01/08/elements" },
];

const budgets = {
  scores: {
    performance: Number(process.env.LH_PERFORMANCE_MIN || 95),
    accessibility: Number(process.env.LH_ACCESSIBILITY_MIN || 90),
    bestPractices: Number(process.env.LH_BEST_PRACTICES_MIN || 95),
    seo: Number(process.env.LH_SEO_MIN || 100),
  },
  numericAudits: {
    "cumulative-layout-shift": Number(process.env.LH_CLS_MAX || 0.1),
    "total-blocking-time": Number(process.env.LH_TBT_MAX || 100),
    "largest-contentful-paint": Number(process.env.LH_LCP_MAX || 2500),
  },
};

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: "inherit",
      shell: false,
      ...options,
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} exited with ${code}`));
    });
    child.on("error", reject);
  });
}

function score(category) {
  return Math.round((category?.score ?? 0) * 100);
}

async function lighthouse(page) {
  const jsonPath = path.join(outDir, `${page.name}.json`);
  const url = new URL(page.path, baseUrl).toString();
  await run(
    path.join(root, "node_modules/.bin/lighthouse"),
    [
      url,
      "--chrome-flags=--headless=new --no-sandbox",
      "--only-categories=performance,accessibility,best-practices,seo",
      "--output=json",
      `--output-path=${jsonPath}`,
      "--quiet",
    ],
    {
      env: {
        ...process.env,
        CHROME_PATH: chromePath,
      },
    },
  );

  const report = JSON.parse(await fs.readFile(jsonPath, "utf8"));
  const audits = report.audits;
  return {
    name: page.name,
    url: report.finalDisplayedUrl,
    scores: {
      performance: score(report.categories.performance),
      accessibility: score(report.categories.accessibility),
      bestPractices: score(report.categories["best-practices"]),
      seo: score(report.categories.seo),
    },
    metrics: {
      fcp: audits["first-contentful-paint"]?.displayValue,
      lcp: audits["largest-contentful-paint"]?.displayValue,
      lcpMs: audits["largest-contentful-paint"]?.numericValue,
      cls: audits["cumulative-layout-shift"]?.displayValue,
      clsValue: audits["cumulative-layout-shift"]?.numericValue,
      tbt: audits["total-blocking-time"]?.displayValue,
      tbtMs: audits["total-blocking-time"]?.numericValue,
      speedIndex: audits["speed-index"]?.displayValue,
    },
    opportunities: Object.values(audits)
      .filter((audit) => audit.details?.type === "opportunity" && audit.score !== 1)
      .map((audit) => ({
        id: audit.id,
        title: audit.title,
        savingsMs: audit.details.overallSavingsMs || 0,
      }))
      .sort((a, b) => b.savingsMs - a.savingsMs)
      .slice(0, 5),
  };
}

await fs.mkdir(outDir, { recursive: true });

const summary = [];
const failures = [];
for (const page of pages) {
  const result = await lighthouse(page);
  summary.push(result);

  for (const [category, minimum] of Object.entries(budgets.scores)) {
    const actual = result.scores[category];
    if (actual < minimum) {
      failures.push(`${result.name}: ${category} ${actual} < ${minimum}`);
    }
  }

  const report = JSON.parse(
    await fs.readFile(path.join(outDir, `${page.name}.json`), "utf8"),
  );
  for (const [auditId, maximum] of Object.entries(budgets.numericAudits)) {
    const actual = report.audits[auditId]?.numericValue;
    if (typeof actual === "number" && actual > maximum) {
      failures.push(`${result.name}: ${auditId} ${actual.toFixed(0)} > ${maximum}`);
    }
  }
}

const summaryPath = path.join(outDir, "summary.json");
await fs.writeFile(summaryPath, `${JSON.stringify(summary, null, 2)}\n`);
console.log(JSON.stringify(summary, null, 2));
console.log(`Wrote ${path.relative(root, summaryPath)}`);

if (failures.length) {
  console.error("Lighthouse budget failures:");
  console.error(failures.join("\n"));
  process.exit(1);
}
