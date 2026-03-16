"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { socialLinksConfig } from "@/data/contact";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { scrollToSection } from "@/lib/layout";
import { RESUME_PDF_URL, RESUME_PDF_FILENAME } from "@/lib/resume";
import { trackEvent } from "@/lib/analytics";

const AnimatedBackground = dynamic(
  () => import("@/components/background/AnimatedBackground"),
  {
    ssr: false,
    loading: () => (
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"
        aria-hidden
      />
    ),
  }
);

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInUpReduced = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const variants = reducedMotion ? fadeInUpReduced : fadeInUp;
  const transition = reducedMotion ? { duration: 0 } : { duration: 0.5 };
  const containerTransition = reducedMotion
    ? { staggerChildren: 0, delayChildren: 0 }
    : { staggerChildren: 0.08, delayChildren: 0.1 };

  return (
    <section
      id="home"
      className="relative min-h-screen snap-start overflow-hidden pt-24 flex items-center"
      aria-labelledby="hero-heading"
    >
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="max-w-3xl"
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: { transition: containerTransition },
          }}
        >
          {/* Eyebrow / status */}
          <motion.div
            variants={variants}
            transition={transition}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8 text-sm text-gray-400"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for new opportunities
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            variants={variants}
            transition={transition}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block">Hi, I&apos;m </span>
            <span className="mt-1 block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Do Van Tung
            </span>
          </motion.h1>

          {/* Role / subline */}
          <motion.p
            variants={variants}
            transition={transition}
            className="mt-4 text-xl text-gray-400 sm:text-2xl md:mt-6"
          >
            Frontend Engineer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={variants}
            transition={transition}
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 md:mt-8 md:text-lg"
          >
            Frontend Engineer with nearly 4 years of experience building scalable web applications using React, Next.js, Vue, and TypeScript.
            Specialized in building enterprise dashboards, management systems, and modern frontend architectures focused on performance and scalability.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={variants}
            transition={transition}
            className="mt-10 flex flex-wrap items-center gap-4 md:mt-12"
          >
            <a
              href={RESUME_PDF_URL}
              download={RESUME_PDF_FILENAME}
              onClick={() => trackEvent("download_cv")}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0f0f0f]"
            >
              <FaDownload className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("view_resume")}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#0f0f0f]"
            >
              <FaExternalLinkAlt className="h-4 w-4" />
              View Resume
            </a>
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#0f0f0f]"
            >
              See my work
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={variants}
            transition={transition}
            className="mt-12 flex items-center gap-6"
          >
            <a
              href={socialLinksConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={socialLinksConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reducedMotion ? 0 : 0.8, duration: reducedMotion ? 0 : 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          type="button"
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 rounded-full text-gray-500 transition-colors hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0f0f0f]"
          aria-label="Scroll to about"
        >
          <span className="text-xs font-medium">Scroll</span>
          {reducedMotion ? (
            <FaArrowDown className="h-4 w-4" />
          ) : (
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaArrowDown className="h-4 w-4" />
            </motion.span>
          )}
        </button>
      </motion.div>
    </section>
  );
}
