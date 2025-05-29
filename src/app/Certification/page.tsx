"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CERTIFICATIONS } from "../utils/data";

const getRandomSize = (): number => {
  const sizes = { small: 1, medium: 2, large: 3 } as const;
  const keys = Object.keys(sizes) as Array<keyof typeof sizes>;
  return sizes[keys[Math.floor(Math.random() * keys.length)]];
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const CertificationSection = () => {
  const router = useRouter();
  return (
    <motion.section
      id="certification"
      className="py-12 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container p-4 max-w-[90%] mx-auto">
      <h2 className="text-2xl text-white font-semibold mb-12 ml-[-3rem]">Certifications</h2>
        <div
          className="grid auto-rows-auto gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
        >
          {CERTIFICATIONS.map((cert) => {
            const rowSpan = getRandomSize();
            return (
              <motion.div
                key={cert.id}
                className={`p-6 rounded-lg shadow-lg bg-gradient-to-br ${cert.color} cursor-pointer hover:glow`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                onClick={() => router.push(cert.link)}
                style={{ gridRowEnd: `span ${rowSpan}` }}
              >
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-gray-200 mt-2">{cert.category}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default CertificationSection;
