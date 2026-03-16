export interface Project {
  title: string;
  description: string;
  image: string;
  /** Stable slug for deep-linking (e.g. from blog). Used in portfolio URL hash/query. */
  slug?: string;
  /** Project domain/industry for filtering (e.g. Enterprise, Finance). */
  domain: string;
  /** Whether this is a personal or client project. */
  category: "personal" | "client";
  technologies: string[];
  features?: string[];
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  /** Blog post slugs (on external blog) that describe how this was built. Enables "Read how I built this". */
  relatedPostSlugs?: string[];
}
