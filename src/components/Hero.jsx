// src/components/Hero.jsx
import React from "react";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col justify-between items-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline // Important for mobile devices
          className="w-full h-full object-cover brightness-[.50]"
        >
          {/* IMPORTANT: Replace 'your-video.mp4' with the actual name of your video file */}
          <source src="/Hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content (now in a separate component) */}
      <HeroContent />
    </section>
  );
};

export default Hero;