const BASE_URL = "https://portfolio-virid-pi-75.vercel.app/"; 

export const personalInfo = {
  name: "Tung Do",
  jobTitle: "Fullstack Developer",
  description:
    "Fullstack Developer building scalable, high-performance web applications with React, Next.js, Vue.js, Node.js, and TypeScript. Focused on clean code and real-world impact.",
  url: BASE_URL,
  image: `${BASE_URL}/images/ava.png`,
  sameAs: [
    "https://github.com/vantungdz",
    "https://www.linkedin.com/in/vantung1806/",
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
    "Vue.js",
    "Node.js",
    "JavaScript",
    "Web Development",
    "Fullstack Development",
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
