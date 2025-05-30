"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Caveat, Boogaloo } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SplashScreen from "./components/SplashScreen";
import HeroSection from "./components/HeroSection";
import Navbar from "./NavBar/page";
import ContactDrawer from "./components/ContactDrawer";
import Experience from "./Experience/page";
import Projects from "./Projects/page";
import Certification from "./Certification/page";

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const boogaloo = Boogaloo({ subsets: ["latin"], weight: "400", variable: "--font-boogaloo" });

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: "spring", stiffness: 500, damping: 10 },
  },
};

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <div
          className={`min-h-screen flex flex-col w-full bg-gradient-to-br from-gray-800 to-purple-900 overflow-y-auto ${caveat.variable} ${boogaloo.variable}`}
        >
          <Navbar />
          <main className="flex-grow min-h-[calc(100vh-100px)]">
            <motion.section
              id="hero"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <HeroSection isDrawerOpen={isDrawerOpen} />
            </motion.section>

            <ContactDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />

            <motion.section
              id="experience"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Experience />
            </motion.section>

            <motion.section
              id="projects"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Projects />
            </motion.section>

            <motion.section
              id="certification"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Certification />
            </motion.section>
          </main>
        </div>
      )}
    </>
  );
}
