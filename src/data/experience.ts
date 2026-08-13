import type { Experience as ExperienceType, ExperienceStat, ResumeExperience, Education } from "@/types/experience";

/** Single source of truth for work experience (Experience section + Resume + CV) */
export const experiences: ExperienceType[] = [
  {
    id: 1,
    company: "ISB Vietnam",
    position: "Frontend Engineer",
    duration: "Jul 2022 – Present",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description:
      "Frontend Engineer working on enterprise software projects, participating in implementation and coding phases while continuously researching and applying new technologies.",
    resumeTime: "07/2022 – Present",
    achievements: [
      "Participated in implementation and coding phases of software development",
      "Performed unit testing and debugging to ensure application quality",
      "Researched and applied new technologies when required by projects",
      "Updated and improved applications based on customer requirements",
    ],
    technologies: ["ReactJS", "TypeScript", "Next.js", "Redux", "Redux-Saga"],
    logo: "🏢",
    resumeDescription: "Participated in implementation, unit testing, and tech research. Updated UI according to customer requirements.",
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
      "Developed interfaces for enterprise management applications, implementing and improving features based on customer feedback and requirements.",
    resumeDescription: "Developed and enhanced business management applications' interfaces based on customer needs.",
    achievements: [
      "Developed interfaces for enterprise management applications",
      "Updated and improved application features based on customer requirements",
      "Collaborated with team members to improve UI functionality",
    ],
    technologies: ["ReactJS", "JavaScript", "HTML", "CSS"],
    logo: "💻",
  },
];

export const experienceStats: ExperienceStat[] = [
  { number: "4+", label: "Years Experience" },
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
  yearsExperience: 4,
  majorProjects: 4,
  companies: 3,
  commitment: 100,
};
