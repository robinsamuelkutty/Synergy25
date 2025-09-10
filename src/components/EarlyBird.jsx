import { useEffect } from "react";
import DecryptedText from "./DecryptedText";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Data for the tickets ---
const ticketData = [
  {
    id: 1,
    type: "Comsoc Member",
    society: "IEEE Communications Society",
    originalPrice: 699, // Original price
    price: 599, // Early bird price
    details: ["Exclusive Access Pass", "Includes All Event Features"],
    isEarlyBird: true,
    maxSeats: 100, // Example: total early bird seats
    seatsSold: 75, // Example: seats already sold
  },
  {
    id: 2,
    type: "IEEE Member",
    society: "IEEE Member",
    originalPrice: 799, // Original price
    price: 699, // Early bird price
    details: ["Full Access Pass", "Includes All Event Features"],
    isEarlyBird: true,
    maxSeats: 150,
    seatsSold: 100,
  },
  {
    id: 3,
    type: "Non-IEEE Member",
    society: "General Admission",
    originalPrice: 899, 
    price: 799, 
    details: ["General Access Pass", "Includes All Event Features"],
    isEarlyBird: true,
    maxSeats: 200,
    seatsSold: 120,
  },
];

// --- Single Ticket Component ---
const Ticket = ({ data }) => {
  const seatsRemaining = data.maxSeats ? data.maxSeats - data.seatsSold : 0;
  const progress = data.maxSeats ? (data.seatsSold / data.maxSeats) * 100 : 0;

  return (
    <div
      className={`w-[350px] h-[550px] bg-black/50 border border-violet-900/40 rounded-2xl flex overflow-hidden relative backdrop-blur-md transition-all duration-300 ease-in-out shadow-lg ${
        data.isEarlyBird
          ? "shadow-violet-500/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-400"
          : "shadow-violet-900/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-600"
      }`}
      data-aos="fade-up"
    >
      {/* Early Bird Highlight */}
      {data.isEarlyBird && (
        <div className="absolute top-4 -left-8 transform -rotate-45 bg-amber-500 text-white text-sm font-bold px-8 py-1 shadow-lg z-20">
          EARLY BIRD!
        </div>
      )}

      {/* Intricate background pattern */}
      <div
        className="absolute inset-0 bg-[20px_20px] opacity-50"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0 50 H100 M50 0 V100" stroke="%234c1d95" strokeWidth="0.2" opacity="0.1"/></svg>')`,
        }}
      ></div>

      {/* Main Ticket Content */}
      <div className="flex-grow p-8 flex flex-col justify-between z-10">
        <header
          className="text-center border-b border-dashed border-violet-900/40 pb-6"
          style={{ fontFamily: "Audiowide, sans-serif" }}
        >
          <h1 className=" text-3xl font-bold text-white drop-shadow-[0_0_8px_#a78bfa]">
            SYNERGY'25
          </h1>
          <p className="text-lg font-medium text-violet-300 tracking-widest mt-2">
            {data.society}
          </p>
        </header>

        <main className="text-center flex-grow flex flex-col justify-center items-center">
          <div className="text-2xl font-bold py-2 px-6 border border-violet-300 rounded-full bg-violet-900/20 text-white mb-4 shadow-inner shadow-violet-400/50">
            {data.type}
          </div>
          {data.details.map((detail, index) => (
            <p key={index} className="text-gray-300 text-base">
              {detail}
            </p>
          ))}
          
        </main>
        <a href="https://forms.gle/Ucr9CqLmYRroYA6s5" className="gradient-button-shimmer">
          REGISTER NOW
        </a>

        <footer className="text-center border-t border-dashed border-violet-900/40 pt-6">
          {data.originalPrice && (
            <div className="text-xl text-gray-400 line-through mb-1">
              ₹{data.originalPrice}/-
            </div>
          )}
          <div className="text-4xl font-bold text-white drop-shadow-[0_0_10px_#a78bfa]">
            ₹{data.price}/-
          </div>
        </footer>
      </div>

      {/* Tear-off Stub */}
      <div className="w-24 bg-gradient-to-b from-violet-800 to-violet-950 flex flex-col justify-around items-center py-6 border-l-2 border-dashed border-white/40">
        <div className="[writing-mode:vertical-rl] [text-orientation:mixed] uppercase tracking-[4px] text-base font-semibold text-violet-100">
          ADMIT ONE
        </div>
        <div className="[writing-mode:vertical-rl] [text-orientation:mixed] uppercase tracking-[4px] text-base font-semibold text-violet-100">
          SYNERGY'25
        </div>
      </div>
    </div>
  );
};

const Registration = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 150 });
  }, []);
  return (
    <div
      className="  text-gray-100 min-h-screen flex flex-col justify-center items-center p-8"
      style={{
        backgroundColor: "#1a052d", // darkest variant of container gradient
      }}
      id="registration"
    >
      <h1 className="text-5xl font-bold text-white mb-10 drop-shadow-[0_0_10px_#a78bfa] ">
        <DecryptedText
          text="REGISTRATION (EARLY BIRD)"
          animateOn="view"
          revealDirection="center"
          speed={120}
          maxIterations={12}
        />
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {ticketData.map((ticket) => (
          <Ticket key={ticket.id} data={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Registration;