export interface LearningItem {
  title: string;
  description: string;
}

/** What's actively being learned right now — signals continuous growth, not a finished skill set. */
export const currentlyLearning: LearningItem[] = [
  {
    title: "AI-assisted Software Development",
    description:
      "Building reliable development workflows with AI while ensuring code quality through manual validation.",
  },
  {
    title: "System Design",
    description:
      "Learning scalable architecture patterns, design trade-offs, and best practices for enterprise applications.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Expanding knowledge of Docker, CI/CD pipelines, cloud deployment, and infrastructure automation.",
  },
  {
    title: "Performance Optimization",
    description:
      "Exploring techniques for improving application performance, database efficiency, and frontend responsiveness.",
  },
];
