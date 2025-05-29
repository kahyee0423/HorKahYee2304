"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Awards() {
  const router = useRouter();

  return (
    <section className="w-full min-h-screen p-8 text-center bg-gradient-to-br from-gray-900 to-blue-900 font-poppins text-white overflow-y-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"
      >
        Awards & Achievements
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 mb-16"
      >
        <button
          onClick={() => router.push("/")}
          className="inline-block px-8 py-3 bg-[#7e61e7] text-white font-bold rounded-lg mt-[70px] outline outline-1.5 outline-transparent transition-all duration-300 ease-in-out hover:bg-black hover:from-transparent hover:to-transparent hover:text-[#a993fe] hover:outline-[#a993fe] hover:scale-105 cursor-pointer"
        >
          Back To Home
        </button>
      </motion.div>
    </section>
  );
}
