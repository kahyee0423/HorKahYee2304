"use client"; 

import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

interface ContactDrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ContactDrawerComponent = ({ isOpen, setIsOpen }: ContactDrawerProps) => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex items-center">
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close contact drawer"
          className="bg-gray-200 p-2 rounded-l-lg shadow-md hover:bg-gray-300 transition-all duration-300 flex items-center justify-center"
        >
          <span className="text-gray-700 transform transition-transform duration-300 hover:scale-110">
            &gt;
          </span>{" "}
        </button>
      )}

      <div
        className={`bg-white shadow-lg rounded-l-lg transition-transform duration-300 ease-in-out overflow-hidden ${
          isOpen ? "w-16 p-4 translate-x-0" : "w-16 p-4 translate-x-[200%]"
        }`}
        aria-expanded={isOpen}
      >
        <div className={`space-y-4 ${isOpen ? "block" : "block"}`}>
          <a
            href="https://www.linkedin.com/in/kahyee0423/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-gray-700 hover:text-[#0077b5] transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/kahyee0423"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-gray-700 hover:text-[#333] transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/kahyxx0423/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-gray-700 hover:text-[#e4405f] transition-all duration-300 transform hover:scale-110"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100018628087825"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-gray-700 hover:text-[#1877f2] transition-all duration-300 transform hover:scale-110"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="mailto:kahyee0423@gmail.com"
            className="flex items-center justify-center text-gray-700 hover:text-[#d14836] transition-all duration-300 transform hover:scale-110"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </div>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open contact drawer"
          className="bg-[#7e61e7] text-white p-3 rounded-l-lg shadow-lg hover:bg-[#a993fe] transition-all duration-300 flex items-center justify-center"
        >
          <span className="transform transition-transform duration-300 hover:scale-110">
            &lt;
          </span>{" "}
        </button>
      )}
    </div>
  );
};

export default function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  return <ContactDrawerComponent isOpen={isOpen} setIsOpen={setIsOpen} />;
}