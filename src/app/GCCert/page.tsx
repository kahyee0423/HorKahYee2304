"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GOOGLE_CLOUD_CERT } from "../data";

interface Skill {
  skill: string;
}

interface Certification {
  img: string;
  name: string;
  category: string;
  id: string;
  verify: string;
  skills: Skill[];
}

const GCCert = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [skillSearchTerm, setSkillSearchTerm] = useState("");
  const [filteredCerts, setFilteredCerts] = useState<Certification[]>([]);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilteredCerts(GOOGLE_CLOUD_CERT || []);
  }, []);

  useEffect(() => {
    const filtered = (GOOGLE_CLOUD_CERT || []).filter((cert) => {
      const matchesCategory = cert.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSkill = cert.skills && cert.skills.some((skill) =>
        skill.skill.toLowerCase().includes(skillSearchTerm.toLowerCase())
      );
      return matchesCategory && matchesSkill;
    });
    setFilteredCerts(filtered);
  }, [searchTerm, skillSearchTerm]);

  return (
    <section className="w-full min-h-screen p-8 text-center bg-gradient-to-br from-blue-900 to-gray-900 to-blue-900 font-poppins text-white overflow-y-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-10 text-white"
      >
        Google Cloud Vanguard Accolades
      </motion.h1>

      <div className="flex justify-center gap-5 mb-8">
        <motion.input
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          type="text"
          placeholder="Search by category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded border border-white/20 bg-white/10 text-white focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-white flex-1 max-w-md"
        />
        <motion.input
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          type="text"
          placeholder="Search by skill..."
          value={skillSearchTerm}
          onChange={(e) => setSkillSearchTerm(e.target.value)}
          className="p-2 rounded border border-white/20 bg-white/10 text-white focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-white flex-1 max-w-md"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mb-8 text-xl font-bold"
      >
        <p>Total Skill Badges: {filteredCerts.length}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredCerts.length > 0 ? (
          filteredCerts.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center"
            >
              <a href={cert.verify} target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden">
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="w-full h-83 rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <h4 className="font-bold text-left">Skills:</h4>
                    <ul className="pl-2">
                        {cert.skills.map((skill, idx) => (
                        <li
                            key={idx}
                            className="list-none relative before:content-['✔'] before:text-[#6751b9] before:absolute before:left-0 before:top-0"
                        >
                            {skill.skill}
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">{cert.name}</h3>
                <p>{cert.category}</p>
                <p>ID: {cert.id}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-2xl text-white col-span-full">No certifications found.</p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-8 mb-16"
      >
        <button
          onClick={() => router.push("/")}
          className="px-8 py-3 bg-gradient-to-r from-orange-400 to-pink-500 border-none rounded-lg text-white text-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          Back To Home
        </button>
      </motion.div>
    </section>
  );
};

export default GCCert;