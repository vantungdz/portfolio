"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import { FaGithub, FaLinkedin, FaArrowDown, FaDownload } from "react-icons/fa";
import { socialLinksConfig } from "@/config/socialLinks";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const container = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const headerHeight = 96;
    window.scrollTo({
      top: el.offsetTop - headerHeight,
      behavior: "smooth",
    });
  }
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen snap-start overflow-hidden pt-24 flex items-center"
    >
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="initial"
          animate="animate"
        >
          {/* Eyebrow / status */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8 text-sm text-gray-400"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for new opportunities
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block">Hi, I&apos;m </span>
            <span className="mt-1 block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Tung Do
            </span>
          </motion.h1>

          {/* Role / subline */}
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-xl text-gray-400 sm:text-2xl md:mt-6"
          >
            Senior Frontend Developer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 md:mt-8 md:text-lg"
          >
            Building modern web experiences with React, TypeScript, and Next.js.
            Focused on clean code, performance, and user-centric design.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap items-center gap-4 md:mt-12"
          >
            <button
              onClick={() => scrollToSection("cv")}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0f0f0f]"
            >
              <FaDownload className="h-4 w-4" />
              View CV
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#0f0f0f]"
            >
              See my work
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeInUp}
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
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 text-gray-500 transition-colors hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0f0f0f] rounded-full"
          aria-label="Scroll to about"
        >
          <span className="text-xs font-medium">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaArrowDown className="h-4 w-4" />
          </motion.span>
        </button>
      </motion.div>
    </section>
  );
}
