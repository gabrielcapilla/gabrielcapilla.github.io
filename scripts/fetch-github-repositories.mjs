import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const projectsDir = path.join(root, "_projects");
const outputPath = path.join(root, "_data", "github_repositories.yml");
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
const strict = process.env.FETCH_GITHUB_STRICT === "true";

function parseFrontMatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const data = {};
  for (const line of match[1].split("\n")) {
    const pair = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!pair) continue;
    data[pair[1]] = pair[2].replace(/^["']|["']$/g, "");
  }
  return data;
}

function repositoryFullName(url) {
  const match = url.match(/github\.com\/([^/\s]+\/[^/\s#?]+)/);
  return match?.[1]?.replace(/\.git$/, "") || "";
}

function yamlString(value) {
  return String(value).replaceAll("\\", "\\\\").replaceAll('"', '\\"');
}

const files = (await fs.readdir(projectsDir)).filter((file) => file.endsWith(".md"));
const repositories = [];

for (const file of files) {
  const projectKey = path.basename(file, ".md");
  const data = parseFrontMatter(await fs.readFile(path.join(projectsDir, file), "utf8"));
  const fullName = repositoryFullName(data.repository || "");
  if (fullName) repositories.push({ projectKey, fullName });
}

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "gabrielcapilla-github-pages-build",
};
if (token) headers.Authorization = `Bearer ${token}`;

const lines = [];
for (const repository of repositories) {
  let response;
  try {
    response = await fetch(`https://api.github.com/repos/${repository.fullName}`, {
      headers,
    });
  } catch (error) {
    if (strict) throw error;
    console.warn(`Skipping GitHub stats refresh: ${error.message}`);
    process.exit(0);
  }

  if (!response.ok) {
    const message = `GitHub API ${response.status} for ${repository.fullName}`;
    if (strict) throw new Error(message);
    console.warn(`Skipping GitHub stats refresh: ${message}`);
    process.exit(0);
  }

  const data = await response.json();
  lines.push(`${repository.projectKey}:`);
  lines.push(`  full_name: ${yamlString(data.full_name)}`);
  lines.push(`  stargazers_count: ${Number(data.stargazers_count || 0)}`);
  lines.push(`  forks_count: ${Number(data.forks_count || 0)}`);
  lines.push(`  html_url: ${yamlString(data.html_url)}`);
}

await fs.writeFile(outputPath, `${lines.join("\n")}\n`);
console.log(`Wrote ${path.relative(root, outputPath)} for ${repositories.length} repositories.`);
