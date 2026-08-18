import type { Experience as ExperienceType, ExperienceStat, ResumeExperience, Education } from "@/types/experience";

/** Single source of truth for work experience (Experience section + Resume + CV) */
export const experiences: ExperienceType[] = [
  {
    id: 1,
    company: "ISB Vietnam",
    position: "Middle Developer",
    duration: "Jul 2022 – Present",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description:
      "Middle Developer delivering production features for Japanese enterprise clients — banking, hotel-management, and school-management systems — covering implementation, API integration, testing, and maintenance. Independently designed and built an internal KPI management platform end-to-end, and contributed to an internal AI/vLLM integration project.",
    resumeTime: "07/2022 – Present",
    achievements: [
      "Delivered production frontend features for Japanese banking, hotel-management, and school-management clients",
      "Independently designed and built an internal KPI management platform end-to-end (Next.js + PostgreSQL)",
      "Implemented RBAC, API integration, testing, and production maintenance across long-running client systems",
      "Contributed to an internal AI/vLLM integration project (function calling, MongoDB, OpenClaw)",
    ],
    technologies: ["ReactJS", "Next.js", "Vue.js", "Angular", "TypeScript", "Node.js", "PostgreSQL"],
    logo: "🏢",
    resumeDescription: "Middle Developer delivering production features for Japanese banking, hotel, and school clients. Independently built an internal KPI platform end-to-end.",
  },
  {
    id: 2,
    company: "BUSO",
    position: "Frontend Engineer",
    duration: "Oct 2020 – Dec 2021",
    resumeTime: "10/2020 – 12/2021",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description:
      "Developed production frontend features for an enterprise management platform covering company administration and recruitment/interview workflows, turning business requirements into reusable interfaces.",
    resumeDescription: "Developed frontend features for company administration and recruitment/interview workflows.",
    achievements: [
      "Developed production frontend features for company administration and recruitment/interview workflows",
      "Turned business requirements into reusable interfaces from implementation through testing and maintenance",
      "Collaborated with the development team to investigate issues and refine workflows",
    ],
    technologies: ["ReactJS", "JavaScript", "HTML", "CSS"],
    logo: "💻",
  },
];

export const experienceStats: ExperienceStat[] = [
  { number: "5+", label: "Years Experience" },
  { number: "10+", label: "Projects Completed" },
  { number: "15+", label: "Technologies" },
  { number: "2", label: "Companies" },
];

/** Resume section summary view derived from experiences */
export function getResumeExperiences(): ResumeExperience[] {
  return experiences.map((exp) => ({
    role: exp.position,
    company: exp.company,
    time: exp.resumeTime ?? exp.duration,
    description: exp.resumeDescription ?? exp.description,
  }));
}

export const education: Education[] = [
  {
    school: "VNUHCM - University Of Science",
    degree: "Bachelor of Computer Science",
    time: "Graduated 08/2020",
  },
];

/** Resume section skill tags */
export const resumeSkillTags: string[] = [
  "JavaScript", "TypeScript", "ReactJS", "NextJS", "Redux", "VueJS",
  "Angular", "Node.js", "Express.js", "HTML/CSS", "Tailwind", "Formik + Yup", "Jest",
  "MongoDB", "MySQL", "PostgreSQL", "Supabase",
  "JWT", "bcrypt", "RBAC",
  "Git", "SVN", "Jira", "Docker", "EsLint", "Prettier",
];

/** Resume section counter values (for CountUp) */
export const resumeCounters = {
  yearsExperience: 5,
  majorProjects: 4,
  companies: 2,
  commitment: 100,
};
