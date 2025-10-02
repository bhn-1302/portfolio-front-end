import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        background: { color: "#111827" }, // fundo cinza escuro
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 120 },
            push: { quantity: 3 },
          },
        },
        particles: {
          number: { value: 80 },
          color: { value: ["#00f0ff", "#ff00f0"] }, // neon azul/rosa
          links: {
            enable: true,
            color: "#00f0ff",
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 2 },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.7 },
        },
        detectRetina: true,
      }}
    />
  );
};
