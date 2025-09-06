import React from "react";

const HeroContent = () => {
  return (
    <div className="relative z-10 flex flex-col justify-between h-full w-full text-center text-white px-6 py-10">
      {/* Top Text */}
      <p className="text-lg md:text-xl font-medium mt-25">
        IEEE SB CE Poonjar presents
      </p>

      {/* Middle Title & New Tagline */}
      <div className="flex flex-col items-center">
        <img
          src="/synergy.white.png"
          alt="Synergy'25 Logo"
          className="h-40 md:h-40 mx-auto object-contain" // Classes to control size & centering
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x160/000000/ffffff?text=Synergy%2725'; }}
        />
        {/* ✨ UPDATED: Added a tagline for impact ✨ */}
        <p className="text-xl md:text-lg font-light text-gray-200">
          In collaboration with IEEE ComSoc Kerala Chapter
        </p>
      </div>

      {/* Bottom Info + Button */}
      <div className="space-y-3 mb-15">
        <p className="text-2xl md:text-2l font-light">
          September 26th & 27th
        </p>
        <p className="text-lg md:text-2xl font-medium">
          College of Engineering, Poonjar
        </p>
        <a href="#registration" className="gradient-button-shimmer">
          REGISTER NOW
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
