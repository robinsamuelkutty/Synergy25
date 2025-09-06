import React, { useEffect } from "react";
import TextType from "./TextType";
import DecryptedText from "./DecryptedText";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 150 });
  }, []);

  return (
    <section
      id="about"
      className="w-full py-16 px-6 text-white"
      style={{
        backgroundColor: "#1a052d", // darkest variant of container gradient
      }}
    >
      <div className="container mx-auto space-y-16">
        {/* Section 1 - About Synergy'25 */}
        <div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8 p-8 rounded-2xl shadow-lg mx-auto max-w-5xl min-h-[320px]"
          style={{
            background: "linear-gradient(90deg, #4c1d95 0%, #7c3aed 100%)",
          }}
          data-aos="fade-up"
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center p-6 rounded-2xl">
            <img
              src="/synergy.white.png"
              alt="IEEE Logo"
              className="max-h-17 md:max-h-17 object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-start text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <TextType
                text={["ABOUT SYNERGY'25"]}
                typingSpeed={100}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl">
              <DecryptedText
                text="IEEE SB CE Poonjar, in collaboration with IEEE ComSoc Kerala Chapter, is organizing Synergy’25 on September 26 & 27, 2025. The event is designed to bring together students, researchers, and professionals to explore the latest developments in communications and technology. With a focus on technical excellence and collaborative growth, Synergy’25 will feature a series of workshops and talk sessions led by experts from academia and industry.
"
                animateOn="view"
                revealDirection="center"
                speed={120}
                maxIterations={12}
              />
            </p>
          </div>
        </div>

        

        {/* Section 2 - About IEEE SB CE Poonjar */}
        <div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8 p-8 rounded-2xl shadow-lg mx-auto max-w-5xl min-h-[320px]"
          style={{
            background: "linear-gradient(90deg, #4c1d95 0%, #7c3aed 100%)",
          }}
          data-aos="fade-up"
        >
          <div className="flex-shrink-0 flex items-center justify-center p-6 rounded-2xl min-w-[200px] md:min-w-[240px]">
            <img
              src="/sb.png"
              alt="SB Logo"
              className="w-full max-w-[240px] h-auto object-contain"
            />
          </div>

          <div className="flex flex-col justify-start text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <TextType
                text={["ABOUT IEEE SB CE POONJAR"]}
                typingSpeed={100}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl">
              <DecryptedText
                text="IEEE Student Branch College of Engineering Poonjar (STB05341) , sustaining all the strategies proposed by the IEEE society from the beginning of 2014 .This branch falls in the KOCHI HUB of IEEE LINK. The tremendous participation for this branch at this present condition gives a fascinating future for the growth of IEEE society with workshops, adamant and creative ideas and so on. The student branch conducts regular activities like seminars, Paper presentations, Technical talks and Awareness Programs."
                animateOn="view"
                revealDirection="right"
                speed={120}
                maxIterations={12}
              />
            </p>
          </div>
        </div>
        {/* Section 3 - IEEE ComSoc Chapter */}
        <div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8 p-8 rounded-2xl shadow-lg mx-auto max-w-5xl min-h-[320px]"
          style={{
            background: "linear-gradient(90deg, #4c1d95 0%, #7c3aed 100%)",
          }}
          data-aos="fade-up"
        >
          <div className="flex-shrink-0 flex items-center justify-center p-6 rounded-2xl">
            <img
              src="/20yearComSoc_White[1].png"
              alt="ComSoc Logo"
              className="max-h-17 md:max-h-17 object-contain"
            />
          </div>

          <div className="flex flex-col justify-start text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <TextType
                text={["ABOUT IEEE COMSOC KERALA CHAPTER"]}
                typingSpeed={100}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl">
              <DecryptedText
                text="The IEEE Communications Society Kerala Chapter is the central hub for communication technology advancement in Kerala. Guided by Chair Job Chunkath, it serves engineers, researchers, educators, and students statewide by organizing flagship summits such as ‘6G & Beyond’ and student-driven initiatives like the All Kerala ComSoc Student Conclave. Through collaboration and professional engagement, the chapter advances resilient and forward-looking communication systems."
                revealDirection="left"
                speed={120}
                maxIterations={12}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
