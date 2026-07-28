export interface ProjectDecision {
  decision: string;
  why: string;
}

export interface ProjectCaseStudy {
  /** The problem/context before this project existed. */
  problem: string;
  /** Key challenges encountered while building it. */
  challenges: string[];
  /** Notable technical decisions and the reasoning/trade-off behind each. */
  decisions?: ProjectDecision[];
  /** Outcome/impact — qualitative if no hard metrics are available. */
  results: string[];
  /** What I'd do differently or learned from this project. */
  lessonsLearned: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  /** Stable slug for deep-linking (e.g. from blog). Used in portfolio URL hash/query. */
  slug?: string;
  /** Project domain/industry. Drives the category filter buttons (see projectCategories). */
  domain: string;
  /** Whether this is a personal or client project. Display-only (badge), not used for filtering. */
  ownership: "personal" | "client";
  technologies: string[];
  features?: string[];
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  /** Shown instead of Demo/Code buttons when no link is available (e.g. confidential client code). */
  codeNote?: string;
  /** Blog post slugs (on external blog) that describe how this was built. Enables "Read how I built this". */
  relatedPostSlugs?: string[];
  /** Full case study content, rendered on /projects/[slug]. */
  caseStudy?: ProjectCaseStudy;
}
