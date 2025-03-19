"use client";

import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { SENTENCE_DATA } from "../data";

interface HeroSectionProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
}

export default function HeroSection({ setIsDrawerOpen }: HeroSectionProps) {
  const [isPaperVisible, setIsPaperVisible] = useState(false);
  const router = useRouter();

  const sentences = SENTENCE_DATA.map((data) => data.text);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 overflow-hidden relative">
      <div className="flex-1 flex items-center w-full">
        <div className="flex-1 flex flex-col items-start justify-center text-white px-16 space-y-8 relative z-10 top-7">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400"
          >
            Hi, I am Kah Yee!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl"
          >
            <Typewriter
              words={sentences}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex space-x-30"
          >
            <a
              href="https://drive.google.com/file/d/12BnFbBJ5briyZb-1JaFojQ33_ealr7d_/view?usp=sharing"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#a993fe] to-[#7e61e7] text-white font-bold rounded-lg mt-[70px] outline outline-1.5 outline-transparent transition-all duration-300 ease-in-out hover:bg-black hover:from-transparent hover:to-transparent hover:text-[#a993fe] hover:outline-[#a993fe]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here to View My Resume
            </a>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#a993fe] to-[#7e61e7] text-white font-bold rounded-lg mt-[70px] outline outline-1.5 outline-transparent transition-all duration-300 ease-in-out hover:bg-black hover:from-transparent hover:to-transparent hover:text-[#a993fe] hover:outline-[#a993fe] cursor-pointer"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex-1 flex items-center justify-center relative z-10 top-7 cursor-pointer"
          onClick={() => setIsPaperVisible(true)}
        >
          <img
            src="./assets/general/cover-pic.png"
            alt="Kah Yee"
            className="w-96 h-auto rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      {isPaperVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-[900px] max-h-[80vh] bg-white border border-gray-300 rounded-lg shadow-lg p-6 overflow-y-auto flex">

            <div className="w-[30%] flex flex-col items-center justify-center pr-6 sticky top-0">
              <img
                src="./assets/general/HorKahYee.jpg"
                alt="Kah Yee"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <button
                onClick={() => router.push("/Profile")}
                className="mt-4 px-4 py-2 text-sm font-semibold bg-[#7e61e7] text-white font-bold rounded-lg outline outline-1.5 outline-transparent transition-all duration-300 ease-in-out hover:bg-black hover:from-transparent hover:to-transparent hover:text-[#a993fe] hover:outline-[#a993fe] hover:scale-105 cursor-pointer"
              >
                View My Profile
              </button>
            </div>

            {/* Content Section */}
            <div className="w-[70%] space-y-4 text-gray-700">
              <h2 className="font-caveat-brush text-2xl mb-4">Here is a Letter for You:</h2>
              <h3 className="text-lg font-bold mb-4">"A Glimpse into My Journey"</h3>
              <p>
              She is an accomplished technology enthusiast and certified cloud professional with expertise in cloud computing, artificial intelligence, and data analytics. Holding multiple prestigious credentials, including Google Cloud Data Analytics, Computing Foundations, Cybersecurity Certifications, and Alibaba Cloud Certified Associate, she is also an AWS AI & ML Scholar, continuously expanding her technical expertise through programs like Google Cloud Skill Boost and Alibaba Cloud Academy.
            </p>
            <p>
              A polyglot fluent in seven languages — Chinese, Malay, English, Cantonese, Hokkien, French, and Japanese — she excels in cross-cultural communication and global collaboration. Her leadership acumen is evident through her tenure at Google Developer Group On Campus (GDGoC USM), where she has served as EXCO of the Event Planning and Culture Development (EPCD) Department and now leads the department. As Project Director of TechFest USM, she drives university-wide innovation and industry engagement.
            </p>
            <p>
              With a strong technical portfolio, she has led data-driven projects in predictive analytics for market trends and wine quality by utilizing advanced ML models such as Random Forest Classifier, Support Vector Machines, and Naïve Bayes algorithms. She has also developed object-oriented software solutions in C++, including a bakery management system and AI-powered image classification models that push the boundaries of deep learning.
            </p>
            <p>
              Beyond her technical work, she is a sought-after speaker, event curator, and thought leader. She has emceed high-profile workshops, facilitated technical training sessions, and delivered insightful talks on front-end development with Angular. As a core organizer of national-level hackathons — the MY Universities Hackathon — she plays a key role in fostering technological excellence among emerging innovators. Her contributions have been recognized with accolades such as the Silver Award at PIITRAM 2023 with an official certification from MYIPO for her innovation.
            </p>
            <p>
              Committed to lifelong learning, she actively participates in global programs like Google I/O, AI Skills Quest, GCPBoleh, and The Arcade Program. Currently, she is deepening her expertise in PostgreSQL and Oracle SQL to strengthen her enterprise data management and cloud infrastructure skills.
            </p>
            <p>
              Outside of her professional pursuits, she enjoys badminton, chess, and photography, embodying a well-rounded and dynamic approach to excellence.
            </p>

            {/* Close Button */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setIsPaperVisible(false)}
                className="px-4 py-2 bg-red-500 mb-3 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 cursor-pointer"
              >
                Close
              </button>
          </div>
            </div>
          </div>
        </div>
      )}

      {/* Blur Background */}
      {isPaperVisible && <div className="fixed inset-0 backdrop-blur-sm z-40"></div>}

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * 1000, scale: Math.random() }}
            animate={{ y: 1000, rotate: 360 }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-2 h-2 bg-white rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}