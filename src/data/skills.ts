import type { SkillCategory } from "@/types/skill";

export const skillsCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", iconKey: "FaReact", level: 95, color: "#61DAFB" },
      { name: "Next.js", iconKey: "SiNextdotjs", level: 88, color: "#e2e8f0" },
      { name: "Vue.js", iconKey: "SiVuedotjs", level: 80, color: "#42B883" },
      { name: "Angular", iconKey: "FaAngular", level: 70, color: "#DD0031" },
      { name: "TypeScript", iconKey: "SiTypescript", level: 90, color: "#3178C6" },
      { name: "JavaScript", iconKey: "FaJs", level: 92, color: "#F7DF1E" },
      { name: "HTML5", iconKey: "FaHtml5", level: 95, color: "#E34F26" },
      { name: "CSS3", iconKey: "FaCss3Alt", level: 90, color: "#1572B6" },
      { name: "TailwindCSS", iconKey: "SiTailwindcss", level: 85, color: "#06B6D4" },
    ],
  },
  {
    category: "State Management",
    items: [
      { name: "Redux", iconKey: "SiRedux", level: 88, color: "#764ABC" },
      { name: "Redux-Saga", iconKey: "SiRedux", level: 82, color: "#999999" },
      { name: "Vuex", iconKey: "SiVuedotjs", level: 78, color: "#42B883" },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", iconKey: "FaNodeJs", level: 75, color: "#339933" },
      { name: "Express", iconKey: "SiExpress", level: 70, color: "#e2e8f0" },
      { name: "REST APIs", iconKey: "FaDatabase", level: 85, color: "#6366f1" },
      { name: "JWT Auth", iconKey: "FaDatabase", level: 80, color: "#eab308" },
      { name: "RBAC", iconKey: "FaDatabase", level: 78, color: "#f97316" },
      { name: "bcrypt", iconKey: "FaDatabase", level: 78, color: "#8b5cf6" },
      { name: "Socket.IO", iconKey: "SiSocketdotio", level: 75, color: "#e2e8f0" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", iconKey: "SiPostgresql", level: 75, color: "#336791" },
      { name: "Supabase", iconKey: "SiSupabase", level: 75, color: "#3ECF8E" },
      { name: "MongoDB", iconKey: "SiMongodb", level: 75, color: "#47A248" },
      { name: "MySQL", iconKey: "SiMysql", level: 72, color: "#4479A1" },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { name: "Git", iconKey: "FaGitAlt", level: 90, color: "#F05032" },
      { name: "Docker", iconKey: "FaDocker", level: 72, color: "#2496ED" },
      { name: "ESLint", iconKey: "SiEslint", level: 85, color: "#4B32C3" },
      { name: "Prettier", iconKey: "SiPrettier", level: 85, color: "#F7B93E" },
      { name: "Jira", iconKey: "SiJira", level: 80, color: "#0052CC" },
      { name: "Redmine", iconKey: "FaDatabase", level: 75, color: "#9b2335" },
      { name: "VS Code", iconKey: "FaDatabase", level: 95, color: "#007ACC" },
    ],
  },
  {
    category: "AI Tools",
    items: [
      { name: "Cursor", iconKey: "FaRobot", level: 85, color: "#6366f1" },
      { name: "GitHub Copilot", iconKey: "FaRobot", level: 82, color: "#e2e8f0" },
      { name: "Gemini", iconKey: "FaRobot", level: 80, color: "#4285F4" },
      { name: "Claude", iconKey: "FaRobot", level: 75, color: "#12ecf3" },
    ],
  },
];
