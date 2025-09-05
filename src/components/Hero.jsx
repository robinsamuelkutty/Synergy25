import React from "react";
import PrismaticBurst from "./PrismaticBurst";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col justify-between items-center overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.5}
          distort={1.0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode="lighten"
          colors={["#ff007a", "#4d3dff", "#ffffff"]}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full text-center text-white px-6 py-10">
        {/* Top Text */}
        <p className="text-lg md:text-xl font-medium mt-25" >
          IEEE SB CE Poonjar presents
        </p>

        {/* Middle Title */}
        <h1 className="text-6xl md:text-8xl font-extrabold mb-15 tracking-wide " style={{ fontFamily: 'Audiowide, sans-serif' }}>
          Synergy'25
        </h1>

        {/* Bottom Info + Button */}
        <div className="space-y-3 mb-15">
          <p className="text-xl md:text-2xl font-light ">
            September 27th & 28th
          </p>
          <p className="text-lg md:text-2xl font-medium ">
            College of Engineering, Poonjar
          </p>
        <a href="#registration" class="gradient-button-shimmer">
            REGISTER NOW
        </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
