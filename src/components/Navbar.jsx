import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    const handleScroll = () => {
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setScrolled(window.scrollY > heroHeight - 80); // navbar turns solid after hero
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a href="#about">
            <img src="/ieee png.png" alt="SPSKC" className="w-14 md:w-18" />
          </a>
          <a href="#about">
            <img src="/sb.png" alt="HTB" className="w-14 md:w-18" />
          </a>
          <a href="#about">
            <img src="/ComSoc Logo White.png" alt="IEEE" className="w-14 md:w-18" />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-fira">
          {["HOME", "REGISTRATION", "WORKSHOPS", "CONTACT"].map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="relative px-3 py-2 transition-colors duration-200 hover:text-[#6835DE]"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transform transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen
            ? "opacity-100 translate-y-0 max-h-96"
            : "opacity-0 -translate-y-5 max-h-0"
        }`}
      >
        <div className="bg-black text-white px-6 py-4 space-y-4">
          {["Home", "Registration", "Workshops", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-[#6835DE] relative px-3 py-2"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
