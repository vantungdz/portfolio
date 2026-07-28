import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "KPI Management System",
    slug: "kpi-management-system",
    description:
      "Enterprises needed a single place to track KPIs using the Balanced Scorecard (BSC) methodology with multi-level approval and real-time visibility. I built a full-stack platform that centralizes goal setting, formula-based scoring, and approval workflows. Teams can now align on objectives and track progress from one dashboard. Built with Vue 3, Ant Design Vue, Vuex, Chart.js, Socket.IO, TypeScript, and ExcelJS.",
    image: "/images/dashboard.png",
    domain: "Enterprise",
    ownership: "client",
    liveUrl: "",
    githubUrl: "",
    technologies: ["Vue 3", "Ant Design Vue", "Vuex", "Chart.js", "Socket.IO", "TypeScript", "ExcelJS"],
    features: [
      "Multi-level KPI tracking with BSC methodology",
      "Formula-based scoring and configurable targets",
      "Real-time notifications and live dashboard updates",
      "Role-based access control (RBAC) for approvals",
      "Analytics and export (Excel) for reporting",
      "Responsive UI for desktop and tablet",
    ],
    year: "2024",
    relatedPostSlugs: [],
  },
  {
    title: "PaySplit",
    slug: "paysplit",
    description:
      "Splitting bills and tracking who paid what in groups was messy and error-prone. I designed and built a mobile app that lets groups create expenses, assign shares, and settle up with real-time sync and MoMo payment integration. Reduces friction in group payments and keeps everyone aligned. Built with React Native, Expo, TypeScript, Node.js, Express, MongoDB, Socket.IO, and JWT.",
    image: "/images/portfolio.jpg",
    domain: "Finance",
    ownership: "personal",
    liveUrl: "",
    githubUrl: "",
    technologies: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
    features: [
      "Real-time payment and balance tracking across devices",
      "JWT-secured auth and session handling",
      "MoMo integration for local payments",
      "Push and in-app notifications for updates",
      "Admin dashboard for oversight and support",
    ],
    year: "2023",
    relatedPostSlugs: [],
  },
  {
    title: "Enterprise Management System",
    slug: "enterprise-management-system",
    description:
      "Tomaho Soft needed a unified interface for accounting, warehouse, and operations instead of scattered tools. I contributed to a React-based enterprise platform that brings these workflows into one place with consistent UX and reusable components. Improved day-to-day operations for staff and reduced context-switching. Built with React, Redux-Saga, Styled Components, Formik, and Yup.",
    image: "/images/tomaho.png",
    domain: "Enterprise",
    ownership: "client",
    liveUrl: "",
    githubUrl: "",
    technologies: ["ReactJS", "Redux-Saga", "Styled Components", "Formik", "Yup"],
    features: [
      "Unified UI for accounting and warehouse workflows",
      "Form validation and error handling with Formik + Yup",
      "Reusable component library for consistency",
      "State management with Redux-Saga for async flows",
    ],
    year: "2022",
    relatedPostSlugs: [],
  },
  {
    title: "Banking System",
    slug: "banking-system",
    description:
      "A large-scale banking product required a modern, type-safe frontend for financial operations and internal workflows. I worked on the React/Next.js frontend: new UI features, requirement analysis, and integration with existing services. The result is a maintainable codebase that supports complex flows and stays performant. Built with React, TypeScript, Next.js, Redux, and Redux-Saga.",
    image: "/images/dashboard.png",
    domain: "Finance",
    ownership: "client",
    liveUrl: "",
    githubUrl: "",
    technologies: ["ReactJS", "TypeScript", "Next.js", "Redux", "Redux-Saga"],
    features: [
      "Type-safe interfaces for critical financial operations",
      "New features delivered from requirement to production",
      "Collaboration with backend on API design and contracts",
      "Stable, performant UI for high-traffic internal use",
    ],
    year: "2023",
    relatedPostSlugs: [],
  },
  {
    title: "Web Blog",
    slug: "web-blog",
    description:
      "Vue 3, Vite, content-driven technical blog with theme toggle, search, and markdown-based posts. Case studies and tutorials on AI, Vue, and developer tools.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    domain: "Personal",
    ownership: "personal",
    liveUrl: (typeof process !== "undefined" && process.env.NEXT_PUBLIC_BLOG_URL) || "",
    githubUrl: "",
    technologies: ["Vue 3", "Vite", "Markdown", "Vue Router", "Pinia"],
    features: [
      "Markdown + frontmatter (gray-matter, marked)",
      "Related project â†” portfolio deep links",
      "Theme toggle, search, archive, tags",
    ],
    year: "2025",
    relatedPostSlugs: ["why-i-started", "vue3-tips", "how-ai-coding-assistants-work"],
  },
];

/** Get project by slug for blog â†’ portfolio linking. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
export const projectCategories = ["All", "Enterprise", "Finance", "Personal"];


