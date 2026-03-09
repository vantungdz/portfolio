const BASE_URL = "https://your-portfolio-domain.com"; 

export const personalInfo = {
  name: "Tung Do",
  jobTitle: "Senior Frontend Developer",
  description:
    "Passionate Senior Frontend Developer with 4+ years of experience building scalable web applications",
  url: BASE_URL,
  image: `${BASE_URL}/images/ava.jpg`,
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
