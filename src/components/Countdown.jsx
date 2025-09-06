import React, { useState, useEffect } from 'react';

// A redesigned, simpler component for each time unit (days, hours, etc.)
const TimeUnit = ({ value, label }) => {
  const formattedValue = String(value).padStart(2, '0');
  
  return (
    <div className="flex flex-col items-center text-center">
      {/* Responsive width and height for the container */}
      <div className="relative w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 flex items-center justify-center">
        {/* We use the key to re-trigger the animation on value change */}
        {/* Responsive font sizes for the numbers */}
        <span 
          key={formattedValue} 
          className="absolute text-4xl sm:text-6xl md:text-8xl text-purple-200 animate-tick"
          style={{ textShadow: '0 0 10px rgba(192, 132, 252, 0.5), 0 0 20px rgba(192, 132, 252, 0.3)' }}
        >
          {formattedValue}
        </span>
      </div>
      {/* Responsive font sizes and margin for the labels */}
      <span className="text-[10px] sm:text-sm md:text-base font-medium uppercase tracking-widest text-purple-300/80 mt-2">{label}</span>
    </div>
  );
};

// The main redesigned Countdown component
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isEventLive, setIsEventLive] = useState(false);

  useEffect(() => {
    // Dynamically load and initialize the AOS (Animate On Scroll) library
    const initializeAOS = () => {
      if (typeof window.AOS !== 'undefined') {
        window.AOS.init({ duration: 1000, offset: 150, once: true });
      }
    };
    
    if (!document.getElementById('aos-script')) {
      const link = document.createElement('link');
      link.id = 'aos-link';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.id = 'aos-script';
      script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
      script.onload = initializeAOS;
      document.body.appendChild(script);
    } else {
      initializeAOS();
    }
    
    // Set the target date for the countdown
    const eventDate = new Date('2025-09-26T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setIsEventLive(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* We inject CSS for fonts and animations directly for a self-contained component */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
        
        .font-orbitron {
          font-family: 'Orbitron', sans-serif;
        }

        @keyframes tick {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-tick {
          animation: tick 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4), 0 0 30px rgba(168, 85, 247, 0.3);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 30px rgba(192, 132, 252, 0.7), 0 0 45px rgba(192, 132, 252, 0.5);
            transform: scale(1.02);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s infinite ease-in-out;
        }
      `}</style>

      <section
        id="countdown"
        className="w-full py-20 px-4 sm:px-6 text-white font-orbitron"
        style={{ backgroundColor: "#1a052d" }}
      >
        <div className="container mx-auto flex flex-col items-center justify-center space-y-12">
          <div className="text-center" data-aos="fade-down">
            {/* Responsive header text */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 tracking-widest uppercase">
              The Future is Almost Here
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-purple-300">
              Get ready for Synergy'25 on September 26th!
            </p>
          </div>

          {isEventLive ? (
            <div 
              data-aos="zoom-in"
              className="text-center text-4xl md:text-6xl font-bold p-8 md:p-12 rounded-2xl shadow-lg animate-pulse-glow"
              style={{ background: "linear-gradient(145deg, #4c1d95, #7c3aed)" }}
            >
              <span className="block text-2xl font-normal text-purple-200">Welcome To</span>
              SYNERGY'25
            </div>
          ) : (
            // Responsive container for the timer itself
            <div 
              data-aos="fade-up"
              className="flex items-center justify-center space-x-1 sm:space-x-2 p-3 sm:p-6 rounded-2xl shadow-lg w-full max-w-xs sm:max-w-xl md:max-w-3xl" 
              style={{ 
                background: "rgba(40, 15, 70, 0.5)", 
                backdropFilter: 'blur(12px)', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
              }}
            >
              <TimeUnit value={timeLeft.days} label="Days" />
              {/* Responsive separators */}
              <span className="text-2xl sm:text-4xl md:text-6xl text-purple-400 pb-6 sm:pb-8 md:pb-12">:</span>
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <span className="text-2xl sm:text-4xl md:text-6xl text-purple-400 pb-6 sm:pb-8 md:pb-12">:</span>
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <span className="text-2xl sm:text-4xl md:text-6xl text-purple-400 pb-6 sm:pb-8 md:pb-12">:</span>
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Countdown;

