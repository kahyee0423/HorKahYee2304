"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

export interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Adjust the time as needed
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      <h1 className="text-4xl font-bold text-white">Loading...</h1>
    </motion.div>
  );
};

export default SplashScreen; 