"use client";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
     <ScrollProgress />
      <Header />
      <main className="scroll-smooth snap-y snap-mandatory bg-black text-white">
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