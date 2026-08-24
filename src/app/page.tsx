import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import AIWorkflow from "@/components/sections/AIWorkflow";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import CurrentlyLearning from "@/components/sections/CurrentlyLearning";
import Blog from "@/components/sections/Blog";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import {
  getProjects,
  getProjectCategories,
  getExperiences,
  getExperienceStats,
  getEducation,
  getResumeMeta,
  getSkillCategories,
  getBlogPosts,
  getSocialLinks,
  getContactInfo,
  getCurrentlyLearning,
  getAIWorkflowItems,
} from "@/lib/queries";

export default async function Page() {
  const [
    projects,
    projectCategories,
    experiences,
    experienceStats,
    education,
    resumeMeta,
    skillsCategories,
    blogPosts,
    socialLinks,
    contactInfo,
    currentlyLearning,
    aiWorkflowItems,
  ] = await Promise.all([
    getProjects(),
    getProjectCategories(),
    getExperiences(),
    getExperienceStats(),
    getEducation(),
    getResumeMeta(),
    getSkillCategories(),
    getBlogPosts(),
    getSocialLinks(),
    getContactInfo(),
    getCurrentlyLearning(),
    getAIWorkflowItems(),
  ]);

  const blogBaseUrl = process.env.NEXT_PUBLIC_BLOG_URL || "";

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <ScrollProgress />
      <Header />
      <main
        id="main"
        role="main"
        className="relative scroll-smooth snap-y snap-mandatory bg-black text-white"
      >
        <Hero socialLinks={socialLinks} />
        <About />
        <Skills skillsCategories={skillsCategories} />
        <AIWorkflow items={aiWorkflowItems} />
        <Experience experiences={experiences} stats={experienceStats} />
        <Projects
          projects={projects}
          categories={projectCategories}
          blogPosts={blogPosts}
          blogBaseUrl={blogBaseUrl}
        />
        <CurrentlyLearning items={currentlyLearning} />
        <Blog blogPosts={blogPosts} projects={projects} blogBaseUrl={blogBaseUrl} />
        <Resume
          experiences={experiences}
          education={education}
          resumeMeta={resumeMeta}
        />
        <Contact socialLinks={socialLinks} contactInfo={contactInfo} />
      </main>
      <Footer socialLinks={socialLinks} contactInfo={contactInfo} />
    </>
  );
}
