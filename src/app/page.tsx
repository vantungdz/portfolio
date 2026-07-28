"use client";

import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Footer from "@/components/layout/Footer";

const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: true });
const AIWorkflow = dynamic(() => import("@/components/sections/AIWorkflow"), { ssr: true });
const Experience = dynamic(() => import("@/components/sections/Experience"), { ssr: true });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: true });
const CurrentlyLearning = dynamic(() => import("@/components/sections/CurrentlyLearning"), { ssr: true });
const Blog = dynamic(() => import("@/components/sections/Blog"), { ssr: true });
const Resume = dynamic(() => import("@/components/sections/Resume"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });

export default function Page() {
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
        <Hero />
        <About />
        <Skills />
        <AIWorkflow />
        <Experience />
        <Projects />
        <CurrentlyLearning />
        <Blog />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
