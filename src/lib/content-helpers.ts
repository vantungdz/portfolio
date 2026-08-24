import type { Project } from "@/types/project";
import type { Experience, ResumeExperience } from "@/types/experience";
import type { BlogPost } from "@/types/blog";

/**
 * Pure, data-free helpers extracted from the old src/data/*.ts files.
 * Content itself now comes from Supabase (see src/lib/queries.ts) and is
 * passed down as props; these functions just operate on that data so
 * client components (ProjectCard, Modal, BlogCard) don't need their own
 * data fetching.
 */

export function getResumeExperiences(experiences: Experience[]): ResumeExperience[] {
  return experiences.map((exp) => ({
    role: exp.position,
    company: exp.company,
    time: exp.resumeTime ?? exp.duration,
    description: exp.resumeDescription ?? exp.description,
  }));
}

/** Latest N articles by date (newest first). */
export function getLatestArticles(articles: BlogPost[], n: number): BlogPost[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, n);
}

export function getPostsBySlugs(articles: BlogPost[], slugs: string[]): BlogPost[] {
  if (!slugs?.length) return [];
  const set = new Set(slugs);
  return articles.filter((a) => set.has(a.slug));
}

/** One-line insight for UI: use curated insight or fallback to shortened excerpt. */
export function getPostInsight(post: BlogPost): string {
  if (post.insight) return post.insight;
  const max = 100;
  return post.excerpt.length <= max ? post.excerpt : post.excerpt.slice(0, max).trim() + "…";
}

/** Full URL to a blog post (path is /post/{slug}), or null if the blog isn't configured. */
export function getPostUrl(slug: string, blogBaseUrl: string): string | null {
  if (!blogBaseUrl) return null;
  return `${blogBaseUrl}/post/${slug}`;
}

export function findProjectBySlug(projects: Project[], slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
