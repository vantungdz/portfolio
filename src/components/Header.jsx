"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = ["Home", "About", "Projects", "Resume", "Contact"];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Use IntersectionObserver to track visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const id = visible.target.getAttribute("id");
          if (id) setActive(id.charAt(0).toUpperCase() + id.slice(1));
        }
      },
      {
        rootMargin: "-30% 0px -65% 0px", // fine-tune when highlight changes
        threshold: 0,
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Blur background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-6 ${
          scrolled ? "bg-black/60 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center py-4 max-w-6xl mx-auto">
          <a href="#home" className="text-xl font-bold text-white">
            TungDo<span className="text-indigo-500">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wide">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec.toLowerCase()}`}
                className={`relative px-1 transition duration-200 ${
                  active === sec ? "text-indigo-400" : "text-gray-300"
                }`}
              >
                {sec}
                {active === sec && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-indigo-400"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-6 pb-4"
          >
            <div className="flex flex-col space-y-2 text-sm font-semibold uppercase tracking-wide">
              {sections.map((sec) => (
                <a
                  key={sec}
                  href={`#${sec.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={`transition ${
                    active === sec ? "text-indigo-400" : "text-gray-300"
                  }`}
                >
                  {sec}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>
    </AnimatePresence>
  );
}
