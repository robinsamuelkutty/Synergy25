import React from 'react';
import { Globe , Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  // Define navigation and social links as arrays for easier mapping
  const navLinks = ["Home", "Registration", "Workshops", "Contact"];
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/ieee-sb-ce-poonjar/", name: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/ieeesbcep/", name: "Instagram" },
  ];

  return (
    <footer className="bg-[#1a052d] text-white font-fira pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Branding & Logos */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              
              <img src="/sb.png" alt="HTB" className="w-18 h-18" />
              <img src="/20yearComSoc_White[1].png" alt="SPSKC" className="w-30 h-10" />
              <img src="/ComSoc Logo White.png" alt="IEEE ComSoc" className="w-20 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center md:text-left">Synergy'25</h3>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Advancing Technology for Humanity. Join us for a premier event on innovation and engineering.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="hover:text-[#6835DE] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-wider uppercase">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-[#6835DE] flex-shrink-0" />
                <span>College Of Engineering Poonjar, Kottayam</span>
              </li>
              <li className="flex items-center">
                <Globe  size={20} className="mr-3 text-[#6835DE] flex-shrink-0" />
                <a href="https://ieee.cep.ac.in/" className="hover:text-[#6835DE] transition-colors duration-300">
                  https://ieee.cep.ac.in/
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-[#6835DE] flex-shrink-0" />
                <a href="tel:+917994378203" className="hover:text-[#6835DE] transition-colors duration-300">
                  +91 79943 78203
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-wider uppercase">Follow Us</h4>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with the latest news and announcements.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-[#6835DE] text-white p-3 rounded-full transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Synergy'25. All Rights Reserved.</p>
          <p className="mt-2">
            Designed by{' '}
            <a 
              href="https://www.linkedin.com/in/robinsamuelkutty/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-gray-400 hover:text-[#6835DE] hover:underline transition-colors duration-300"
            >
              Robin Samuelkutty
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;