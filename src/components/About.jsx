"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="min-h-screen snap-start w-full bg-[#121212] flex items-center justify-center px-6 pt-24"
    >
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={reducedMotion ? false : { opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10"
      >
        {/* Avatar */}
        <div className="relative w-48 h-48 md:w-60 md:h-60">
          <Image
            src="/images/ava.jpg"
            alt="Do Van Tung - Frontend Engineer"
            fill
            className="object-cover rounded-full border-4 border-indigo-500 shadow-lg"
            sizes="(max-width: 768px) 192px, 240px"
            priority
            quality={90}
          />
        </div>

        {/* Info */}
        <div className="text-center md:text-left">
          <h2 id="about-heading" className="text-4xl font-bold mb-4">About Me</h2>

          <p className="text-gray-400 text-lg mb-4 leading-relaxed">
            I am a <span className="text-indigo-400 font-medium">Frontend Engineer</span> with nearly 4 years of experience developing modern web applications and enterprise management systems.
          </p>

          <p className="text-gray-400 text-lg mb-4 leading-relaxed">
            My main expertise lies in building scalable user interfaces using <span className="text-indigo-400">React</span>, <span className="text-indigo-400">Next.js</span>, <span className="text-indigo-400">Vue.js</span>, and <span className="text-indigo-400">TypeScript</span>. I have experience working on complex systems such as banking platforms, warehouse management systems, KPI management dashboards, and enterprise accounting software.
          </p>

          <p className="text-gray-400 text-lg mb-4 leading-relaxed">
            I focus on writing clean, maintainable code and designing intuitive user experiences. I am also experienced in working with state management tools like <span className="text-indigo-400">Redux</span> and <span className="text-indigo-400">Vuex</span>, integrating REST APIs, and building real-time features using technologies like <span className="text-indigo-400">Socket.IO</span>.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Beyond frontend development, I enjoy learning new technologies, improving application performance, and building full-stack side projects that combine modern frontend frameworks with scalable backend architectures.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
