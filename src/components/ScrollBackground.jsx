"use client";

import { useEffect, useState, useRef } from "react";

const sectionColors = {
  home: "#0c0c0c",
  about: "#121212",
  skills: "#0a0a0a",
  experience: "#0f0f0f",
  projects: "#0f1117",
  testimonials: "#0a0a0a",
  blog: "#0a0a0a",
  cv: "#0f0f0f",
  resume: "#0f0f0f",
  contact: "#0d1b2a",
};

const DEFAULT_BG = sectionColors.home;

export default function ScrollBackground() {
  const [bg, setBg] = useState(DEFAULT_BG);
  const currentIdRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries.find((e) => e.isIntersecting);
        if (vis) {
          const id = vis.target.id;
          if (id === currentIdRef.current) return;
          const next = sectionColors[id] ?? DEFAULT_BG;
          currentIdRef.current = id;
          setBg(next);
        }
      },
      { threshold: 0.5 }
    );

    Object.keys(sectionColors).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 transition-colors duration-1000"
      style={{ backgroundColor: bg }}
    />
  );
}
