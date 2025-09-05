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
              src="/ieee png.png"
              alt="IEEE Logo"
              className="max-h-22 md:max-h-24 object-contain"
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
                text="Synergy'25 is the flagship technical fest of IEEE SB CE Poonjar, bringing together students, innovators, and professionals to celebrate technology, creativity, and collaboration. It’s a platform for showcasing ideas, engaging workshops, and exciting competitions."
                animateOn="view"
                revealDirection="center"
                speed={120}
                maxIterations={12}
              />
            </p>
          </div>
        </div>

        {/* Section 2 - IEEE ComSoc Chapter */}
        <div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8 p-8 rounded-2xl shadow-lg mx-auto max-w-5xl min-h-[320px]"
          style={{
            background: "linear-gradient(90deg, #4c1d95 0%, #7c3aed 100%)",
          }}
          data-aos="fade-up"
        >
          <div className="flex-shrink-0 flex items-center justify-center p-6 rounded-2xl">
            <img
              src="/ComSoc Logo White.png"
              alt="ComSoc Logo"
              className="max-h-22 md:max-h-24 object-contain"
            />
          </div>

          <div className="flex flex-col justify-start text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <TextType
                text={["ABOUT IEEE COMSOC CHAPTER"]}
                typingSpeed={100}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl">
              <DecryptedText
                text="The IEEE Communications Society (ComSoc) Chapter focuses on advancing communication technologies. Our chapter conducts events, talks, and projects to empower students with knowledge in networking, wireless communication, and modern digital technologies."
                animateOn="view"
                revealDirection="left"
                speed={120}
                maxIterations={12}
              />
            </p>
          </div>
        </div>

        {/* Section 3 - IEEE SB CE Poonjar */}
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
                text="IEEE SB CE Poonjar is a vibrant student branch under IEEE Kerala Section. We aim to foster innovation, technical growth, and professional development through workshops, hackathons, technical talks, and outreach programs, building a strong community of future engineers."
                animateOn="view"
                revealDirection="right"
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
