export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  /** One-line engineering takeaway for portfolio "Engineering Insights" (hiring signal). */
  insight?: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  featured?: boolean;
  /** Portfolio project slug this post is a case study for. Enables "Related project" link. */
  relatedProjectSlug?: string;
}
