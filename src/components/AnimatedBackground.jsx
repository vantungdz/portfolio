"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function AnimatedBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // dùng slim thay vì full
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          move: { enable: true, speed: 0.5 },
          opacity: { value: 0.5 },
          links: { enable: true, color: "#ffffff", distance: 120 },
        },
        background: {
          color: "transparent",
        },
      }}
    />
  );
}
