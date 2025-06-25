"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen snap-start overflow-hidden">
       <AnimatedBackground />
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <section id="home" className="h-screen snap-start w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center px-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Hi, I'm <span className="text-indigo-500">Tung Do</span>
              </h1>
              <div className="mt-8 flex justify-center">
                <div className="relative inline-flex">
                  <span className="relative z-10 text-white px-5 py-2 rounded-full border border-indigo-500 bg-indigo-500/10 backdrop-blur-md">
                    I'm available for freelance
                  </span>
                  <span className="absolute inset-0 rounded-full animate-ping bg-indigo-500/40 z-0" />
                </div>
              </div>
              <p className="mt-4 text-lg md:text-xl text-gray-400 min-h-[32px]">
                <TypeAnimation
                  sequence={[
                    "Creative Developer",
                    2000,
                    "UI/UX Lover",
                    2000,
                    "Frontend Architect",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </p>
            </motion.div>
          </section>
        </div>
    </section>
  );
}
