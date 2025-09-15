import React, { useState, useEffect, useRef } from "react";
import DecryptedText from "./DecryptedText"; // Assuming this is in the same folder
import AOS from "aos";
import "aos/dist/aos.css";

// --- Simplified Schedule Data ---
const scheduleData = [
  { day: 1, time: "9:00 AM - 10:00 AM", title: "Registration" },
  { day: 1, time: "10:00 AM - 10:45 AM", title: "Opening Ceremony" },
  { day: 1, time: "10:45 AM - 11:30 AM", title: "Ice-Breaking Activity" },
  { day: 1, time: "11:30 AM - 1:00 PM", title: "Keynote Session 1" },
  { day: 1, time: "1:00 PM - 1:45 PM", title: "Lunch Break" },
  { day: 1, time: "1:45 PM - 3:30 PM", title: "Workshops (1, 2)" },
  { day: 1, time: "3:30 PM - 3:40 PM", title: "Tea Break" },
  { day: 1, time: "3:40 PM - 5:00 PM", title: "Workshops (1, 2)" },
  { day: 1, time: "5:00 PM - 6:00 PM", title: "Relaxation/Game" },
  { day: 1, time: "6:00 PM - 7:30 PM", title: "Cultural Night" },
  { day: 1, time: "7:30 PM - 8:30 PM", title: "Dinner" },
  { day: 1, time: "8:30 PM - 10:00 PM", title: "DJ Party" },
  { day: 2, time: "8:00 AM - 9:30 AM", title: "Breakfast" },
  { day: 2, time: "9:30 AM - 10:00 AM", title: "Morning Session" },
  { day: 2, time: "10:00 AM - 11:30 AM", title: "Workshops (3, 4)" },
  { day: 2, time: "11:30 AM - 11:40 AM", title: "Tea Break" },
  { day: 2, time: "11:40 AM - 1:00 PM", title: "Workshops (3, 4)" },
  { day: 2, time: "1:00 PM - 2:00 PM", title: "Lunch Break" },
  { day: 2, time: "2:00 PM - 3:30 PM", title: "Closing & Photo Session" },
  { day: 2, time: "3:30 PM - 3:40 PM", title: "Tea Break" },
  { day: 2, time: "4:00 PM", title: "Event Concludes" },
];

// --- Reusable card for each event ---
const ScheduleCard = ({ time, title }) => (
  <div
    className="relative pl-8"
    data-aos="fade-up"
    
  >
    {/* Decorative dot on the timeline */}
    <div className="absolute left-[2px] top-1.5 h-3 w-3 rounded-full bg-violet-500 border-2 border-violet-900"></div>
    <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-violet-900/50 transition-all duration-300 hover:bg-violet-900/50 hover:shadow-lg hover:shadow-violet-600/30">
      <p className="text-sm font-semibold text-violet-300 tracking-wider">{time}</p>
      <h3 className="text-md font-bold text-white mt-1">{title}</h3>
    </div>
  </div>
);

// --- Reusable Column with animated line ---
const ScheduleColumn = ({ title, events, aosDelay = "0" }) => {
  const columnRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (columnRef.current) {
        const { top, height } = columnRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Start the animation when the top of the column is 80% up the screen
        const startPoint = top - windowHeight * 0.45;
        // The total scrollable distance for this element's animation
        const animatedDistance = height - windowHeight * 0.2;

        let scrollProgress = (-startPoint / animatedDistance) * 100;
        scrollProgress = Math.min(100, Math.max(0, scrollProgress)); // Clamp between 0 and 100
        setProgress(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={columnRef} className="w-full md:w-1/2 lg:w-2/5">
      <h2
        className="text-3xl font-bold text-center text-violet-300 mb-8"
        data-aos="fade-up"
        
      >
        {title}
      </h2>
      <div className="relative space-y-6">
        {/* Timeline Track */}
        <div className="absolute left-[8px] top-0 h-full w-0.5 bg-violet-900/40"></div>
        {/* Animated Progress Line */}
        <div
          className="absolute left-[8px] top-0 w-0.5 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded shadow-[0_0_10px_#a78bfa]"
          style={{ height: `${progress}%` }}
        ></div>
        {events.map((item, index) => (
          <ScheduleCard key={index} time={item.time} title={item.title} />
        ))}
      </div>
    </div>
  );
};

// --- Main Schedule Component ---
const Schedule = () => {
  useEffect(() => {
    AOS.init({ duration: 600, offset: 50});
  }, []);

  const day1Events = scheduleData.filter((item) => item.day === 1);
  const day2Events = scheduleData.filter((item) => item.day === 2);

  return (
    <section
      id="schedule"
      className="w-full py-20 px-6"
      style={{ backgroundColor: "#1a052d" }}
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-20 drop-shadow-[0_0_10px_#a78bfa]">
          <DecryptedText text="EVENT SCHEDULE" animateOn="view" speed={120} />
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-12 lg:gap-20">
          <ScheduleColumn title="Day 1: Spark & Synergy" events={day1Events} />
          <ScheduleColumn title="Day 2: Innovate & Inspire" events={day2Events} aosDelay="200" />
        </div>
      </div>
    </section>
  );
};

export default Schedule;