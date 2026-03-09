export interface Project {
  title: string;
  description: string;
  image: string;
  /** Project domain/industry for filtering (e.g. Enterprise, Finance). */
  domain: string;
  /** Whether this is a personal or client project. */
  category: "personal" | "client";
  technologies: string[];
  features?: string[];
  year: string;
  liveUrl?: string;
  githubUrl?: string;
}
