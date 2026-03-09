"use client";

import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const PARTICLE_COUNT = 35;
const PARTICLE_COUNT_MOBILE = 25;

function getParticleOptions(linksEnabled) {
  return {
    fullScreen: { enable: true, zIndex: 0 },
    particles: {
      number: {
        value: typeof window !== "undefined" && window.innerWidth < 768 ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT,
      },
      size: { value: 2 },
      move: { enable: true, speed: 0.5 },
      opacity: { value: 0.5 },
      links: {
        enable: linksEnabled,
        color: "#ffffff",
        distance: 120,
      },
    },
    background: { color: "transparent" },
  };
}

export default function AnimatedBackground() {
  const [options, setOptions] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(prefersReducedMotion);

    if (prefersReducedMotion) {
      setOptions(null);
      return;
    }

    const isMobile = window.innerWidth < 768;
    setOptions(getParticleOptions(!isMobile));

    const onResize = () => {
      const mobile = window.innerWidth < 768;
      setOptions(getParticleOptions(!mobile));
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (reducedMotion) {
    return (
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"
        aria-hidden
      />
    );
  }

  if (options === null) {
    return (
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"
        aria-hidden
      />
    );
  }

  return (
    <Particles
      id="tsparticles"
      init={async (engine) => {
        await loadSlim(engine);
      }}
      options={options}
    />
  );
}
