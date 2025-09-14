// src/components/Speakers.js

import React from 'react';
import DecryptedText from './DecryptedText';
import ChromaGrid from './ChromaGrid';

// (Your imports and speakersList array remain the same)
import speaker1 from '../assets/Princii.jpg';
import speaker2 from '../assets/sai.jpg';
import speaker3 from '../assets/madduma.jpg';
import speaker4 from '../assets/noble.jpg';

const speakersList = [
  {
    image: speaker1,
    title: "Dr. M V Rajesh",
    subtitle: " Chair strategic initiative (Academia), IEEE Kerala Section | Principal, CE Poonjar ",
    handle: "  ",
    borderColor: "#8B5CF6", // Violet
    gradient: "linear-gradient(145deg, #8B5CF6, #1a052d)",
  },
  {
    image: speaker2,
    title: "M Sai Prashanth",
    subtitle: "Advisory Board Member, The Institute's Editorial Advisory Board, IEEE PSPB(V)",
    handle: "  ",
    borderColor: "#3B82F6", // Blue
    gradient: "linear-gradient(145deg, #3B82F6, #1a052d)",
  },
  {
    image: speaker3,
    title: "Dr. Pasan Maduranga",
    subtitle: " Senior Lecturer, University of Sri Jayewardenepura, Sri Lanka",
    handle: "      ",
    borderColor: "#EC4899", // Pink
    gradient: "linear-gradient(145deg, #EC4899, #1a052d)",
  },
  {
    image: speaker4,
    title: "Noble Chakradhar",
    subtitle: " Application Engineer - IICT India",
    handle: "      ",
    borderColor: "#F59E0B", 
    gradient: "linear-gradient(165deg,#F59E0B,#000)",
  },
];


const Speakers = () => {
  return (
    // UPDATED: Changed overflow-hidden to overflow-x-hidden to allow vertical scroll
    <div className="relative flex flex-col min-h-screen w-full items-center justify-center overflow-x-hidden text-white py-20">
      <h1 className="text-5xl font-bold text-center text-white mb-20 drop-shadow-[0_0_10px_#a78bfa]">
                <DecryptedText text="MEET OUR SPEAKERS" animateOn="view" speed={120} />
              </h1>

      {/* Container for the ChromaGrid */}
      {/* UPDATED: Removed the fixed height style to make the container responsive */}
      <div className="w-full max-w-6xl px-4">
        <ChromaGrid 
          items={speakersList}
          // The props below are for a different layout, you can remove them if not needed by the current grid
          // radius={320}
          // damping={0.4}
          // fadeOut={0.5}
          // ease="power3.out"
        />
      </div>
    </div>
  );
};

export default Speakers;