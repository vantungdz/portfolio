import type { BlogPost } from "@/types/blog";

/** Base URL of your external blog. Used for "View all articles" and card links. */
export const BLOG_BASE_URL = "https://web-blog-1-kpe5.onrender.com";

export const articles: BlogPost[] = [
  {
    id: 1,
    title: "Building a KPI Management System with Vue 3",
    slug: "building-kpi-management-system-vue-3",
    excerpt:
      "How I designed and implemented a multi-level KPI workflow system using Vue 3 and Ant Design Vue, including BSC methodology, formula-based scoring, and real-time notifications.",
    image: "/images/dashboard.png",
    category: "Vue",
    readTime: "10 min read",
    date: "2024-03-01",
    tags: ["Vue 3", "Ant Design Vue", "KPI", "Socket.IO"],
    featured: true,
  },
  {
    id: 2,
    title: "Designing Scalable Dashboard Architectures",
    slug: "designing-scalable-dashboard-architectures",
    excerpt:
      "Best practices for building scalable dashboards using modern frontend frameworks, including component decomposition, data fetching strategies, and performance optimization.",
    image: "/images/tomaho.png",
    category: "Architecture",
    readTime: "8 min read",
    date: "2024-02-15",
    tags: ["Architecture", "Dashboard", "React", "Performance"],
  },
  {
    id: 3,
    title: "Implementing RBAC in Frontend Applications",
    slug: "implementing-rbac-frontend-applications",
    excerpt:
      "How to implement role-based access control in Vue and React applications, including route guards, conditional rendering, and JWT token management.",
    image: "/images/portfolio.jpg",
    category: "Security",
    readTime: "7 min read",
    date: "2024-01-20",
    tags: ["RBAC", "Security", "Vue", "React"],
  },
  {
    id: 4,
    title: "Real-time Notifications with Socket.IO",
    slug: "real-time-notifications-socket-io",
    excerpt:
      "Building real-time notification systems for web applications using Socket.IO, including event-driven architecture, room management, and frontend integration.",
    image: "/images/dashboard.png",
    category: "Backend",
    readTime: "9 min read",
    date: "2023-12-10",
    tags: ["Socket.IO", "Real-time", "Node.js", "WebSockets"],
  },
  {
    id: 5,
    title: "Optimizing React and Next.js Performance",
    slug: "optimizing-react-nextjs-performance",
    excerpt:
      "Techniques to improve performance in modern React applications, including code splitting, lazy loading, memoization, and Next.js-specific optimizations.",
    image: "/images/portfolio.jpg",
    category: "Performance",
    readTime: "11 min read",
    date: "2023-11-20",
    tags: ["React", "Next.js", "Performance", "Optimization"],
  },
];

/** Latest N articles by date (newest first), for portfolio preview. */
export function getLatestArticles(n: number): BlogPost[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, n);
}
