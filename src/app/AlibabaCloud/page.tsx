"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ALIBABA_CERT, ALIBABA_SPECIALTY_CERT } from "../utils/data";
import AuroraGradientAnimated from "../AuroraGradientAnimated/page";
import { motion } from "framer-motion";
import Image from "next/image";

const AlibabaCloud = () => {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const certItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    certItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-y-auto">
      <AuroraGradientAnimated />
      <section className="p-2">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mt-12 p-4"
      >
        <h2 className="text-5xl font-bold text-white hover:scale-105 transition-transform duration-300">
          Certified Expertise in Alibaba Cloud Technologies
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-20 p-10 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <h4 className="text-2xl max-w-xs border border-purple-600 p-8 rounded-2xl h-80 flex justify-center items-center text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
          Alibaba Cloud Certified Associate
        </h4>

        <div className="relative flex-1 flex justify-center items-center">
          <div className="relative w-full aspect-square">
            <Image
              src="/assets/AlibabaCloudPic/ACA.png"
              alt="ACA pic"
              fill
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
        <div className="ml-4 text-left">
          <p>Credential ID: IACA01241000159425L</p>
          <p>Valid Till: Oct 2026</p>
        </div>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-4xl font-bold ml-8 mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        Specialty Certification
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 mb-20"
      >
        {ALIBABA_SPECIALTY_CERT.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.02 }}
            viewport={{ once: true }}
            className="p-4 border border-purple-600 rounded-xl bg-black transition-all duration-300 ease-in-out hover:scale-105"
          >
            <div className="relative w-full aspect-square mb-4">
              <Image
                src={cert.image}
                alt={`Specialty Certification ${index + 1}`}
                fill
                className="rounded-lg object-contain"
              />
            </div>
            <p className="text-lg font-semibold">Certification Code: {cert.code}</p>
            <p className="text-sm text-gray-300">Expires: {cert.expire}</p>
          </motion.div>
        ))}
      </motion.div>

        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-4xl font-bold ml-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Miscellaneous Certification
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-3 gap-5 p-12"
        >
          {ALIBABA_CERT.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.01 }}
              viewport={{ once: true }} 
              className="relative w-full text-left"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={cert.image1}
                  alt={`Certification ${index + 1}`}
                  fill
                  className={`p-8 transition-opacity duration-500 ease-in-out object-contain ${
                    hoveredImage === index ? "opacity-0" : "opacity-100"
                  }`}
                />
                <Image
                  src={cert.image2}
                  alt={`Certification ${index + 1} Hover`}
                  fill
                  className={`absolute top-0 left-0 p-8 transition-opacity duration-500 ease-in-out object-contain ${
                    hoveredImage === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
              <p>Certification Code: {cert.code}</p>
              <p>Expires: {cert.expire}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center mt-8"
        >
          <button
            className="px-6 py-2 bg-purple-600 text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-black hover:text-[#a993fe] hover:outline-[#a993fe] hover:scale-105"
            onClick={() => router.push("/")}
          >
            Back To Home
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default AlibabaCloud;