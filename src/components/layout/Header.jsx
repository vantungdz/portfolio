"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  SECTION_IDS,
  scrollToSection,
  sectionIdToLabel,
} from "@/lib/layout";
import { RESUME_PDF_URL, RESUME_PDF_FILENAME } from "@/lib/resume";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstNavItemRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const scrolledRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.getAttribute("id");
          if (id) setActive(sectionIdToLabel(id));
          break;
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const now = window.scrollY > 16;
      if (now !== scrolledRef.current) {
        scrolledRef.current = now;
        setScrolled(now);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Focus first menu item when menu opens, return focus to hamburger when it closes
  useEffect(() => {
    if (menuOpen) {
      const timer = requestAnimationFrame(() => {
        firstNavItemRef.current?.focus();
      });
      return () => cancelAnimationFrame(timer);
    } else {
      menuButtonRef.current?.focus();
    }
  }, [menuOpen]);

  // Close menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const motionTransition = reducedMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 380, damping: 30 };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="flex items-center transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Tung Do - Home"
          >
            <Image
              src="/images/logo.png"
              alt="Tung Do"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </button>

          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center gap-1">
              {SECTION_IDS.map((sectionId) => {
                const label = sectionIdToLabel(sectionId);
                const isActive = active === label;
                return (
                  <li key={sectionId}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(sectionId)}
                      className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId={reducedMotion ? undefined : "header-active"}
                          className="absolute inset-0 rounded-md bg-white/10"
                          transition={motionTransition}
                        />
                      )}
                      <span className="relative">{label}</span>
                    </button>
                  </li>
                );
              })}
              <li>
                <a
                  href={RESUME_PDF_URL}
                  download={RESUME_PDF_FILENAME}
                  onClick={() => trackEvent("download_cv")}
                  className="relative rounded-md px-3 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  title="Download CV as PDF"
                >
                  <span className="relative">Download CV</span>
                </a>
              </li>
              <li>
                <a
                  href={RESUME_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("view_resume")}
                  className="relative rounded-md px-3 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  title="View Resume (opens in new tab)"
                >
                  <span className="relative">View Resume</span>
                </a>
              </li>
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={openMenu}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-haspopup="true"
            aria-controls="mobile-menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { type: "spring", damping: 25, stiffness: 200 }
              }
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-black/95 backdrop-blur-xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex h-16 items-center justify-between border-b border-white/10 px-6">
                <span className="text-lg font-semibold text-white">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav
                className="flex-1 overflow-y-auto px-4 py-4"
                aria-label="Main navigation"
              >
                <ul className="space-y-0.5">
                  {SECTION_IDS.map((sectionId, index) => {
                    const label = sectionIdToLabel(sectionId);
                    const isActive = active === label;
                    const isFirst = index === 0;
                    return (
                      <li key={sectionId}>
                        <button
                          ref={isFirst ? firstNavItemRef : null}
                          type="button"
                          onClick={() => handleNavClick(sectionId)}
                          className={`flex w-full items-center rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 ${
                            isActive
                              ? "bg-white/10 text-white"
                              : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                          }`}
                        >
                          {label}
                        </button>
                      </li>
                    );
                  })}
                  <li>
                    <a
                      href={RESUME_PDF_URL}
                      download={RESUME_PDF_FILENAME}
                      onClick={() => trackEvent("download_cv")}
                      className="flex w-full items-center rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                      title="Download CV as PDF"
                    >
                      Download CV
                    </a>
                  </li>
                  <li>
                    <a
                      href={RESUME_PDF_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("view_resume")}
                      className="flex w-full items-center rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                      title="View Resume (opens in new tab)"
                    >
                      View Resume
                    </a>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
