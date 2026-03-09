"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const highlights = [
  "4+ years building modern web applications",
  "React / Next.js / Vue / TypeScript",
  "Experience with enterprise dashboards and complex systems",
  "Performance-focused frontend architecture",
];

export default function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="min-h-screen snap-start w-full bg-[#121212] flex items-center justify-center px-6 py-20 pt-24"
    >
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={reducedMotion ? false : { opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-16"
      >
        {/* Left: Avatar */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-40 h-40 shrink-0 rounded-full ring-4 ring-primary/20 shadow-xl">
            <Image
              src="/images/ava.jpg"
              alt="Do Van Tung - Frontend Engineer"
              fill
              className="object-cover rounded-full border border-neutral-700"
              sizes="160px"
              priority
              quality={90}
            />
          </div>
        </div>

        {/* Right: Intro + description + focus + highlights (spans 2 cols on md) */}
        <div className="md:col-span-2 space-y-6 text-center md:text-left">
          <h2
            id="about-heading"
            className="text-4xl font-bold tracking-tight text-white"
          >
            About Me
          </h2>

          <p className="text-lg text-neutral-300 leading-relaxed">
            I&apos;m a <span className="text-primary font-medium">Frontend Engineer</span> with nearly 4 years of experience building modern, scalable web applications and enterprise management systems.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            My main expertise lies in developing high-quality user interfaces using React, Next.js, Vue.js, and TypeScript. I have worked on complex enterprise platforms including banking systems, warehouse management systems, KPI dashboards, and accounting software.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            I focus on writing clean, maintainable code and designing intuitive user experiences while ensuring performance and scalability in modern frontend architectures.
          </p>

          <ul className="space-y-4 pt-2" aria-label="Highlights">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-neutral-300"
              >
                <span className="text-primary text-lg leading-none" aria-hidden>⚡</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
