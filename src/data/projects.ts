import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "KPI Management System",
    description: "Full-stack KPI management platform designed to support Balanced Scorecard (BSC) methodology and multi-level approval workflows.",
    image: "/images/dashboard.png",
    domain: "Enterprise",
    category: "client",
    liveUrl: "",
    githubUrl: "",
    technologies: ["Vue 3", "Ant Design Vue", "Vuex", "Chart.js", "Socket.IO", "TypeScript", "ExcelJS"],
    features: ["Multi-level KPI Tracking", "Formula-based Scoring", "Real-time Notifications", "RBAC", "Dashboard Analytics", "Responsive UI"],
    year: "2024",
  },
  {
    title: "PaySplit",
    description: "Mobile application for splitting bills and managing group payments with real-time tracking and MoMo payment integration.",
    image: "/images/portfolio.jpg",
    domain: "Finance",
    category: "personal",
    liveUrl: "https://github.com/your-user/portfolio",
    githubUrl: "https://github.com/your-user/portfolio",
    technologies: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
    features: ["Real-time Payment Tracking", "JWT Authentication", "MoMo Integration", "Real-time Notifications", "Admin Dashboard"],
    year: "2023",
  },
  {
    title: "Enterprise Management System",
    description: "Enterprise software platform (Tomaho Soft) used to manage multiple business processes including accounting and warehouse operations.",
    image: "/images/tomaho.png",
    domain: "Enterprise",
    category: "client",
    liveUrl: "",
    githubUrl: "",
    technologies: ["ReactJS", "Redux-Saga", "Styled Components", "Formik", "Yup"],
    features: ["Enterprise Management UI", "Accounting Workflows", "Warehouse Management", "Reusable Components"],
    year: "2022",
  },
  {
    title: "Banking System",
    description: "Large-scale banking platform supporting financial operations and internal workflows with React, TypeScript, and Next.js.",
    image: "/images/dashboard.png",
    domain: "Finance",
    category: "client",
    liveUrl: "",
    githubUrl: "",
    technologies: ["ReactJS", "TypeScript", "Next.js", "Redux", "Redux-Saga"],
    features: ["Frontend Interfaces", "New UI Features", "Requirement Analysis", "Financial Operations"],
    year: "2023",
  },
];

export const projectCategories = ["All", "Enterprise", "Finance"];
