"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function ContactDrawer({ isOpen, setIsOpen }: Props) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-6 flex flex-col items-center"
    >
      <button
        className="self-end text-gray-500 hover:text-gray-800 mb-4"
        onClick={() => setIsOpen(false)}
        aria-label="Close Drawer"
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Contact Me</h2>
      <div className="flex flex-col space-y-4 w-full">
        <a
          href="mailto:kahyee0423@gmail.com"
          className="flex items-center space-x-3 text-gray-700 hover:text-red-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={24} />
          <span>Email</span>
        </a>
        <a
          href="https://github.com/kahyee0423"
          className="flex items-center space-x-3 text-gray-700 hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/kahyee0423/"
          className="flex items-center space-x-3 text-gray-700 hover:text-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://www.instagram.com/kahyxx2304/"
          className="flex items-center space-x-3 text-gray-700 hover:text-red-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
          <span>Instagram</span>
        </a>
      </div>
    </motion.div>
  );
}