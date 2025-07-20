"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedBackground from "./AnimatedBackground";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const ctx = gsap.context(() => {
      // Floating animation for the main text
      gsap.to(textRef.current, {
        y: -20,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

      // Parallax effect for background elements
      gsap.to(".parallax-bg", {
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, heroRef);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen snap-start overflow-hidden pt-24">
      <AnimatedBackground />
      
      {/* Floating particles - only render on client side */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-indigo-500/30 rounded-full"
              initial={{
                x: Math.random() * windowDimensions.width,
                y: Math.random() * windowDimensions.height,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="text-center px-4 max-w-4xl">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-indigo-400 font-medium tracking-wider text-sm md:text-base">
              ✨ WELCOME TO MY PORTFOLIO ✨
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Tung Do
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-8">
              <TypeAnimation
                sequence={[
                  "Creative Developer",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                  "Frontend Architect",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-indigo-400 font-medium"
              />
            </div>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <div className="relative inline-flex">
              <span className="relative z-10 text-white px-6 py-3 rounded-full border border-indigo-500 bg-indigo-500/20 backdrop-blur-md font-medium text-sm md:text-base">
                🚀 Available for new opportunities
              </span>
              <span className="absolute inset-0 rounded-full animate-ping bg-indigo-500/30 z-0" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting exceptional digital experiences with modern technologies. 
            Passionate about clean code, meaningful animations, and user-centric design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('cv');
                if (element) {
                  const headerHeight = 96;
                  const elementPosition = element.offsetTop - headerHeight;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
            >
              <FaDownload className="text-sm" />
              View CV
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  const headerHeight = 96;
                  const elementPosition = element.offsetTop - headerHeight;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
              className="border-2 border-indigo-500 text-indigo-400 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
            >
              View Projects
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-6 mt-6"
          >
            {[
              { icon: <FaGithub />, href: "#", label: "GitHub" },
              { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-xl md:text-2xl text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
