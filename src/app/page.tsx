"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CV from "@/components/CV";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="relative scroll-smooth snap-y snap-mandatory bg-black text-white">
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
