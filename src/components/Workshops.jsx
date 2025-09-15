import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DecryptedText from './DecryptedText';
import Workshop1 from '../assets//Workshop1.jpg';
import Workshop2 from '../assets//Workshop2.jpg';
import Workshop3 from '../assets//Workshop3.jpg';
import Workshop4 from '../assets//Workshop4.jpg';
import Workshop5 from '../assets//Workshop5.jpg';

/**
 * A single workshop card that tilts on hover and flips on click.
 */
const WorkshopCard = ({ title, description, posterUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    // Calculate mouse position relative to the card center
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    // The amplitude of the rotation. Higher value = more tilt.
    const rotateAmplitude = 12;
    const rotateX = (y / height) * -rotateAmplitude * 2;
    const rotateY = (x / width) * rotateAmplitude * 2;

    // Apply the tilt and scale transformation
    cardRef.current.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    // Reset the card to its default state
    cardRef.current.style.transform = 'perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    // Static container for perspective and AOS animation
    <div className="w-full h-96 [perspective:1500px]" data-aos="fade-up">
      {/* The element that will TILT on hover and handle the CLICK */}
      <div
        ref={cardRef}
        className="w-full h-full cursor-pointer transition-transform duration-500 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* The inner element that will FLIP */}
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          {/* Front Side of the Card (Poster) */}
          <div className="absolute w-full h-full [backface-visibility:hidden] overflow-hidden rounded-2xl shadow-lg">
            <img
              src={posterUrl}
              alt={`${title} Poster`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  flex flex-col items-center justify-end p-4">
              <h3 className="text-white text-2xl font-bold text-center mb-2">{title}</h3>
              <span className="bg-white/20 text-white text-xs font-bold py-1 px-3 rounded-full">
                CLICK TO FLIP
              </span>
            </div>
          </div>

          {/* Back Side of the Card (Details) */}
          <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#4c1d95] to-[#7c3aed] rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center text-center">
            <div>
              <h4 className="text-white text-2xl font-bold mb-3">{title}</h4>
              <p className="text-white/90 text-md">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * The main component that displays a grid of all workshop cards.
 */
const Workshops = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      offset: 150,    // Offset (in px) from the original trigger point
      once: true,     // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const workshopData = [
    {
  title: '',
  description: 'WORKSHOP: Join this specialized workshop on MATLAB and Simulink, essential tools for the modern engineer. The session is led by the respected Dr. M.V. Rajesh Maliyeckal, Principal of CE Poonjar and Chair of Strategic Initiative on Academia for the IEEE Kerala Section. An expert in intelligent signal processing, he will guide you through MATLAB’s powerful data analysis and programming capabilities, as well as Simulink’s features for system modeling and simulation, giving you hands-on skills for real-world engineering challenges.',
  posterUrl: Workshop1
},
{
  title: '',
  description: 'WORKSHOP: Step into the future of connectivity with this foundational program on 5G Usecase Development, led by Noble Chakradhar from IICT India. This session covers the core concepts and real-world applications of 5G, teaching you to leverage its high speed and low latency for innovative solutions in smart cities, IoT, and augmented reality. It is a perfect opportunity to understand and harness the power of next-generation wireless technology.',
  posterUrl: Workshop4,
},
    {
      title: '',
      description: 'WORKSHOP: IoT with NodeMCU Lead by Varghese Benny, Founder & CEO of Rabbitsquare Dive into the world of the Internet of Things (IoT) at this hands-on workshop! Join Varghese Benny, the visionary Founder and Chief Executive Officer of Rabbitsquare, as he guides you through the fundamentals and practical applications of IoT using the versatile NodeMCU platform. This session is designed for aspiring innovators and tech enthusiasts, providing you with the skills to build smart, connected devices from the ground up.',
      posterUrl: Workshop5
    },
     {
      title: '',
      description: 'TALK SESSION: Unlock the full potential of your IEEE membership in this insightful talk session led by M. Sai Prashanth, the Chair of Student Activities for the IEEE ComSoc Member Services Board. In this session, you will discover the vast opportunities and benefits available to you as an IEEE member. M. Sai Prashanth will share strategies on how to get more involved, take full advantage of professional development resources, and build a strong, lasting network within the global IEEE community. ',
      posterUrl: Workshop2
    },
    {
      title: '',
      description: 'TALK SESSION: Explore the future of location-based IoT services in this engaging talk session with Dr. Pasan Maduranga, a Senior Lecturer at the University of Sri Jayewardenepura. Dr. Maduranga will delve into the critical topic of indoor localization, an essential component for a vast range of modern IoT applications. This session will cover the latest techniques and practical methodologies for designing and building effective indoor localization testbeds, providing the knowledge needed to create smarter and more precise IoT solutions.',
      posterUrl: Workshop3
    },
    
  ];

  return (
    <section
      id="workshops"
      className="w-full py-20 px-6"
      style={{ backgroundColor: "#1a052d" }}
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-20 drop-shadow-[0_0_10px_#a78bfa]">
          <DecryptedText text="WORKSHOPS & TALK SESSIONS" animateOn="view" speed={120} />
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {workshopData.map((workshop, index) => (
            <WorkshopCard
              key={index}
              title={workshop.title}
              description={workshop.description}
              posterUrl={workshop.posterUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;