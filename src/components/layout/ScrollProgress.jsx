"use client";

import { useEffect, useState, useRef } from "react";

function supportsScrollTimeline() {
  return typeof CSS !== "undefined" && CSS.supports("animation-timeline: scroll()");
}

export default function ScrollProgress() {
  const [fallbackWidth, setFallbackWidth] = useState(0);
  const rafId = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    if (supportsScrollTimeline()) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setFallbackWidth(height > 0 ? (scrollTop / height) * 100 : 0);
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      rafId.current = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
      if (rafId.current != null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[100] h-1 w-full bg-transparent">
      <div
        className="scroll-progress-fill h-full bg-primary"
        style={{ transform: `scaleX(${fallbackWidth / 100})` }}
      />
    </div>
  );
}
