/**
 * Validates that portfolio projects' relatedPostSlugs exist in the blog.
 * Run from portfolio root: npx tsx scripts/validateBlogSlugs.ts
 */
import * as fs from "fs";
import * as path from "path";

const BLOG_POSTS_DIR = path.join(__dirname, "../../Web-blog/src/content/posts");
const PROJECTS_PATH = path.join(__dirname, "../src/data/projects.ts");

function getActualBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_POSTS_DIR)) {
    console.warn("[validateBlogSlugs] Blog posts dir not found:", BLOG_POSTS_DIR);
    return [];
  }
  const files = fs.readdirSync(BLOG_POSTS_DIR);
  return files
    .filter((f) => f.endsWith(".md") && !f.toLowerCase().startsWith("readme"))
    .map((f) => f.replace(/\.md$/i, ""));
}

function getRelatedPostSlugsFromProjectsFile(): string[] {
  if (!fs.existsSync(PROJECTS_PATH)) {
    console.warn("[validateBlogSlugs] Projects file not found:", PROJECTS_PATH);
    return [];
  }
  const content = fs.readFileSync(PROJECTS_PATH, "utf-8");
  const slugs: string[] = [];
  const matches = content.matchAll(/relatedPostSlugs:\s*\[([^\]]*)\]/g);
  for (const m of matches) {
    const inner = m[1];
    if (!inner.trim()) continue;
    const part = inner.split(",").map((s) => s.replace(/["'\s]/g, "").trim()).filter(Boolean);
    slugs.push(...part);
  }
  return [...new Set(slugs)];
}

function main(): void {
  const actualSlugs = new Set(getActualBlogSlugs());
  const referencedSlugs = getRelatedPostSlugsFromProjectsFile();

  let hasWarning = false;
  for (const slug of referencedSlugs) {
    if (!actualSlugs.has(slug)) {
      console.warn(`[validateBlogSlugs] Missing slug in blog: "${slug}"`);
      hasWarning = true;
    }
  }

  if (!hasWarning) {
    console.log("[validateBlogSlugs] All relatedPostSlugs exist in the blog.");
  }
  process.exit(hasWarning ? 1 : 0);
}

main();
