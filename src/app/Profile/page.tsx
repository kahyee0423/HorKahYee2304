"use client";

import React from "react";
import { FaAward } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CERTIFICATE_ICONS } from "../utils/data";
import { PROFILE_LINKS } from "../utils/data";
import Image from "next/image";

const Profile = () => {
  const router = useRouter();

  return (
    <section className="w-full min-h-screen p-8 text-center bg-gradient-to-br from-gray-900 to-blue-900 font-poppins text-white overflow-y-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"
      >
        Know More About Me
      </motion.h1>

      <div className="flex justify-between items-start p-4 gap-8 flex-wrap ml-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-8 justify-start flex-1"
        >
          {CERTIFICATE_ICONS.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center bg-white/10 p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/20 transition-transform hover:scale-110"
            >
              <FaAward className="text-yellow-400 text-5xl mb-3 group-hover:animate-pulse" />
              <div className="relative w-28 h-28 md:w-32 md:h-32">
                <Image
                  src={cert.img}
                  alt="Certificate"
                  fill
                  className="rounded-xl object-contain"
                />
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col gap-6 text-left flex-1 font-geist-sans"
        >
          {PROFILE_LINKS.map((profile, index) => (
            <Link
              key={index}
              href={profile.href}
              className="flex items-center justify-start w-[32rem] h-24 bg-white/10 border-2 border-white/20 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm text-white text-xl px-4 no-underline"
            >
              <div className="relative w-[76px] h-[76px] mr-14">
                <Image
                  src={profile.img}
                  alt={profile.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <span>{profile.text}</span>
            </Link>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
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
};

export default Profile;