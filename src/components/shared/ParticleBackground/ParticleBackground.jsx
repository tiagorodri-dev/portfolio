import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 25,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: { value: "#f80" },
          links: {
            enable: true,
            distance: 150,
            color: "#f80",
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: "bounce",
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: 3 },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticleBackground;
