export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  /** Optional format for Resume section (e.g. "07/2022 – Present") */
  resumeTime?: string;
  location: string;
  type: string;
  description: string;
  /** Optional shorter description for Resume section */
  resumeDescription?: string;
  achievements: string[];
  technologies: string[];
  logo: string;
}

export interface ExperienceStat {
  number: string;
  label: string;
}

/** Resume section uses a summary view of experience */
export interface ResumeExperience {
  role: string;
  company: string;
  time: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  time: string;
}
