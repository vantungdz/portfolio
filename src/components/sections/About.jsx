"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const highlights = [
  "Own systems end-to-end: requirements, architecture, frontend, backend, and database design",
  "Delivered production features for Japanese enterprise clients across banking, hospitality, and education systems",
  "Independently built an internal KPI platform — Next.js frontend through PostgreSQL and business logic",
  "Use AI to move faster on repetitive work, but verify every suggestion before it ships",
  "Pick up new stacks quickly — moved between React, Vue, Angular, and Next.js across projects without slowing delivery down",
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
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[minmax(0,280px)_1fr] gap-10 sm:gap-14 md:gap-16 lg:gap-20 items-center md:items-start"
      >
        {/* Avatar: prominent, balanced, dark-theme aligned */}
        <div className="flex justify-center md:justify-start md:sticky md:top-28">
          <div
            className="
              relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] lg:w-[260px] lg:h-[260px]
              shrink-0 rounded-full
              border-[3px] border-white/20 md:border-[4px] md:border-primary/30
              bg-neutral-800/90
              shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)]
              ring-4 ring-primary/5
              transition-[transform,box-shadow,border-color] duration-300 ease-out
              hover:scale-[1.02] hover:border-primary/50 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08),0_0_60px_rgba(99,102,241,0.15)]
              motion-reduce:hover:scale-100
            "
          >
            <Image
              src="/images/ava.png"
              alt="Do Van Tung - Fullstack Developer"
              fill
              className="object-cover object-top rounded-full select-none"
              sizes="(max-width: 640px) 200px, (max-width: 768px) 220px, (max-width: 1024px) 240px, 260px"
              priority
              quality={90}
            />
          </div>
        </div>

        {/* Content: intro, description, highlights */}
        <div className="space-y-6 text-center md:text-left min-w-0">
          <h2
            id="about-heading"
            className="text-4xl font-bold tracking-tight text-white"
          >
            About Me
          </h2>

          <p className="text-lg text-neutral-300 leading-relaxed">
            I&apos;m a <span className="text-primary font-medium">Fullstack Developer</span> with 5+ years turning business problems into reliable production systems — from banking, hotel, and school platforms for Japanese clients to an internal KPI platform I built end-to-end.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            I work across React, Next.js, Vue.js, Angular, and Node.js — from frontend interfaces down to backend APIs, RBAC, and database design — plus AI/LLM-oriented backend integrations like function calling, vLLM, and OpenClaw.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            I prioritize clean code, performance, and user experience — whether that&apos;s a customer-facing feature or the backend logic underneath it — aiming for impact that both users and engineering teams can feel.
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
