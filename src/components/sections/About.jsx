"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const highlights = [
  "4+ years shipping production web applications",
  "React, Next.js, Node.js, Vue, TypeScript",
  "Enterprise dashboards, banking UIs, and operations tools",
  "Clean code, performance, and maintainable architecture",
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
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 md:gap-16 lg:gap-20 items-center"
      >
        {/* Left: Avatar — 200–240px desktop, responsive on mobile */}
        <div className="flex justify-center md:justify-start">
          <div
            className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[240px] lg:h-[240px] shrink-0 rounded-full border-4 border-white/90 bg-neutral-800"
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05), 0 0 40px rgba(255,255,255,0.08), 0 0 80px rgba(255,255,255,0.04)",
            }}
          >
            <Image
              src="/images/ava.png"
              alt="Do Van Tung - Frontend Engineer"
              fill
              className="object-cover rounded-full"
              sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 240px"
              priority
              quality={90}
            />
          </div>
        </div>

        {/* Right: Intro + description + focus + highlights */}
        <div className="space-y-6 text-center md:text-left min-w-0">
          <h2
            id="about-heading"
            className="text-4xl font-bold tracking-tight text-white"
          >
            About Me
          </h2>

          <p className="text-lg text-neutral-300 leading-relaxed">
            I&apos;m a <span className="text-primary font-medium">Senior Frontend Engineer</span> with 4+ years turning business problems into reliable, fast web applications — from banking UIs and KPI dashboards to warehouse and accounting systems.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            I work mainly with React, Next.js, Vue, and TypeScript, and I care about solving real problems: clear requirements, sensible architecture, and code that stays maintainable as products grow.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            I prioritize clean code, performance, and user experience. Whether it&apos;s a new feature or refactoring legacy code, I aim for impact that both users and engineering teams can feel.
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
