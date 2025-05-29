"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 top-0">
      {/* Hover container only on desktop */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hidden sm:block transition-all duration-300"
      >
        <div
          className={`max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <div className="flex justify-between h-20 bg-black/80 backdrop-blur-md rounded-b-xl px-6">
            <div className="flex items-center">
              <Link href="/" className="text-white text-2xl font-bold">
                <div className="relative w-[350px] h-[70px] md:w-[400px] md:h-[80px] lg:w-[450px] lg:h-[90px]">
                  <Image
                    src="/assets/general/Name2.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop nav buttons */}
            <div className="hidden sm:flex sm:items-center space-x-8">
              {[
                { label: "Home", id: "hero" },
                { label: "Experience", id: "experience" },
                { label: "Projects", id: "projects" },
                { label: "Certification", id: "certification" },
                { label: "Awards", id: "certification" },
              ].map(({ label, id }) => (
                <button
                  key={label}
                  onClick={() =>
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-lg font-medium relative group"
                >
                  {label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#a993fe] to-[#7e61e7] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view - Always visible */}
      <div className="sm:hidden bg-black/80 backdrop-blur-md px-4 py-3 flex justify-between items-center">
        <Link href="/" className="relative w-[200px] h-[50px]">
          <Image
            src="/assets/general/Name2.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="text-white hover:text-gray-200 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-black/90 backdrop-blur-md px-2 pt-2 pb-3 space-y-1">
          {[
            { label: "Home", id: "hero" },
            { label: "Experience", id: "experience" },
            { label: "Projects", id: "projects" },
            { label: "Certification", id: "certification" },
            { label: "Awards", id: "certification" },
          ].map(({ label, id }) => (
            <button
              key={label}
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
