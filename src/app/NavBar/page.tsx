"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 top-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="text-white text-2xl font-bold">
              <img
                src="./assets/general/Name2.png" 
                alt="Logo"
                className="h-auto w-70"
              />
            </Link>
          </div>

          {/*Hamburger menu for mobile*/}
          <div className="flex items-center sm:hidden">
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

          <div className="hidden sm:flex sm:items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-lg font-geist-sans font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#a993fe] to-[#7e61e7] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
            <Link
              href="/skills"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-lg font-geist-sans font-medium relative group"
            >
              Skills
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#a993fe] to-[#7e61e7] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
            <Link
              href="/experience"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-lg font-geist-sans font-medium relative group"
            >
              Experience
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#a993fe] to-[#7e61e7] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-lg font-geist-sans font-medium relative group"
            >
              Projects
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#a993fe] to-[#7e61e7] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>

      {/*Mobile menu*/}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/skills"
              className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </Link>
            <Link
              href="/experience"
              className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}