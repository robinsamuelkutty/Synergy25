// src/components/Hero.jsx
import React, { Suspense, lazy } from "react";
import HeroContent from "./HeroContent";

// Lazily import the heavy component
const PrismaticBurst = lazy(() => import("./PrismaticBurst"));

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col justify-between items-center overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        {/* Suspense provides a fallback while the component loads */}
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <PrismaticBurst
            animationType="rotate3d"
            intensity={2}
            speed={0.5}
            distort={1.0} // Remember to try lowering this
            paused={false}
            offset={{ x: 0, y: 0 }}
            hoverDampness={0.25}
            rayCount={24} // And this
            mixBlendMode="lighten"
            colors={["#ff007a", "#4d3dff", "#ffffff"]}
          />
        </Suspense>
      </div>

      {/* Content (now in a separate component) */}
      <HeroContent />
    </section>
  );
};

export default Hero;