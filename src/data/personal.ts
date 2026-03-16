const BASE_URL = "https://portfolio-virid-pi-75.vercel.app/"; 

export const personalInfo = {
  name: "Tung Do",
  jobTitle: "Senior Frontend Developer",
  description:
    "Senior Frontend Developer building scalable, high-performance web applications with React, Next.js, and TypeScript. Focused on clean code and real-world impact.",
  url: BASE_URL,
  image: `${BASE_URL}/images/ava.png`,
  sameAs: [
    "https://github.com/vantungdz",
    "https://www.linkedin.com/in/t%C3%B9ng-%C4%91%E1%BB%97-v%C4%83n-475b8637a/",
    "https://twitter.com/your-twitter",
  ],
  worksFor: {
    "@type": "Organization" as const,
    name: "Freelance",
  },
  address: {
    "@type": "PostalAddress" as const,
    addressLocality: "Ho Chi Minh City",
    addressCountry: "Vietnam",
  },
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "Web Development",
    "Frontend Development",
    "UI/UX Design",
  ],
} as const;

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.jobTitle,
    description: personalInfo.description,
    url: personalInfo.url,
    image: personalInfo.image,
    sameAs: personalInfo.sameAs,
    worksFor: personalInfo.worksFor,
    address: personalInfo.address,
    knowsAbout: personalInfo.knowsAbout,
  };
}
