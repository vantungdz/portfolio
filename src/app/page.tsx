"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";

const About = dynamic(() => import("@/components/About"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: true,
});
const Blog = dynamic(() => import("@/components/Blog"), { ssr: true });
const CV = dynamic(() => import("@/components/CV"), { ssr: true });
const Resume = dynamic(() => import("@/components/Resume"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

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
        <Experience />
        <Projects />
        <Testimonials />
        <Blog />
        <CV />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
