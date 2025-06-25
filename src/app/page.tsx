"use client";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume"
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "#0f0f0f";
  }, []);

 return (
    <>
     <ScrollProgress />
      <Header />
      <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-black text-white">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  );
}