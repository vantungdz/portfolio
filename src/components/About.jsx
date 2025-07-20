"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen snap-start w-full bg-[#121212] flex items-center justify-center px-6 pt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10"
      >
        {/* Avatar */}
        <div className="relative w-48 h-48 md:w-60 md:h-60">
          <Image
            src="/images/avatar.jpg"
            alt="Tung Do - Senior Frontend Developer"
            fill
            className="object-cover rounded-full border-4 border-indigo-500 shadow-lg"
            sizes="(max-width: 768px) 192px, 240px"
            priority
            quality={90}
          />
        </div>

        {/* Info */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>

          <p className="text-gray-400 text-lg mb-4 leading-relaxed">
            I'm <span className="text-indigo-400 font-medium">Do Van Tung</span>, a passionate Junior Software Engineer with nearly 4 years of experience building user-centric web applications.
          </p>

          <p className="text-gray-400 text-lg mb-4 leading-relaxed">
            My core expertise includes <span className="text-indigo-400">ReactJS</span>, <span className="text-indigo-400">TypeScript</span>, <span className="text-indigo-400">Redux</span>, and responsive UI/UX. I've worked on large-scale systems in banking, e-commerce, and enterprise management.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            I believe in clean code, meaningful animation, and always being ready to learn something new. Let's build something amazing together!
          </p>
        </div>
      </motion.div>
    </section>
  );
}
