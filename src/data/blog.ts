import type { BlogPost } from "@/types/blog";

/** Base URL of your external blog. Set in .env.local as NEXT_PUBLIC_BLOG_URL. */
export const BLOG_BASE_URL =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_BLOG_URL) ||
  "";

/** Full URL to a blog post (path is /post/{slug}), or null if the blog isn't configured yet. */
export function getPostUrl(slug: string): string | null {
  if (!BLOG_BASE_URL) return null;
  return `${BLOG_BASE_URL}/post/${slug}`;
}

/**
 * Articles synced from the personal blog (Web-blog).
 * Slug must match the blog post filename (e.g. why-i-started.md → "why-i-started").
 * Clicking a card opens the full article on the blog.
 */
export const articles: BlogPost[] = [
  {
    id: 1,
    title: "Why I Started This Blog",
    slug: "why-i-started",
    excerpt:
      "My journey into blogging and what I hope to share with you",
    insight: "Learning in public and giving back to the developer community.",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2lxsmrcljn1il41724af.png",
    category: "Personal",
    readTime: "3 min read",
    date: "2025-06-20",
    tags: ["personal", "blogging", "intro"],
    featured: true,
    relatedProjectSlug: "web-blog",
  },
  {
    id: 2,
    title: "Vue 3 Composition API: Essential Tips for Beginners",
    slug: "vue3-tips",
    excerpt:
      "Learn the most important patterns and best practices for Vue 3's Composition API",
    insight: "Master ref vs reactive, composables, and TypeScript with Vue 3.",
    image: "https://i.ytimg.com/vi/oEOehmMNuHs/maxresdefault.jpg",
    category: "Vue",
    readTime: "8 min read",
    date: "2025-06-21",
    tags: ["vue", "javascript", "frontend", "tutorial"],
    featured: true,
    relatedProjectSlug: "web-blog",
  },
  {
    id: 3,
    title: "How AI Coding Assistants Actually Work",
    slug: "how-ai-coding-assistants-work",
    excerpt:
      "Explore how AI coding assistants like GitHub Copilot and Cursor work and how they help developers write better code.",
    insight: "Understanding LLMs and context windows behind Copilot and Cursor.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    category: "AI",
    readTime: "8 min read",
    date: "2025-07-05",
    tags: ["ai", "developer-tools", "coding-assistant", "programming"],
    featured: false,
    relatedProjectSlug: "web-blog",
  },
  {
    id: 4,
    title: "RAG Explained for Developers: How AI Uses External Knowledge",
    slug: "rag-explained-for-developers",
    excerpt:
      "Understand how Retrieval-Augmented Generation (RAG) works and why it is essential for building AI applications that use external knowledge.",
    insight: "RAG lets AI use private data and docs without retraining the model.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    category: "AI",
    readTime: "10 min read",
    date: "2025-07-01",
    tags: ["ai", "rag", "ai-architecture", "vector-database"],
    featured: false,
    relatedProjectSlug: "web-blog",
  },
  {
    id: 5,
    title: "Building Your First AI Chatbot with JavaScript",
    slug: "building-ai-chatbot-javascript",
    excerpt:
      "Learn how to build a simple AI chatbot using JavaScript and an AI API. A practical guide for developers getting started with AI applications.",
    insight: "Step-by-step: from LLM APIs to a working chat UI in JavaScript.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    category: "Tutorial",
    readTime: "9 min read",
    date: "2025-06-30",
    tags: ["ai", "javascript", "chatbot", "tutorial"],
    featured: false,
    relatedProjectSlug: "web-blog",
  },
];

/** Latest N articles by date (newest first), for portfolio preview. */
export function getLatestArticles(n: number): BlogPost[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, n);
}

/** Get blog posts by slug (for portfolio → blog "Engineering Insights" links). */
export function getPostsBySlugs(slugs: string[]): BlogPost[] {
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
