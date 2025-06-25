"use client";
import { useEffect, useState } from "react";

const sectionColors = {
  home: "#0c0c0c",
  about: "#121212",
  projects: "#0f1117",
  resume: "#1a1a2e",
  contact: "#0d1b2a",
};

export default function ScrollBackground() {
  const [bg, setBg] = useState(sectionColors.home);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries.find((e) => e.isIntersecting);
        if (vis) {
          const id = vis.target.id;
          if (sectionColors[id]) setBg(sectionColors[id]);
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
