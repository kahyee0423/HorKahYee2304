'use client';

import React, { useState } from "react";
import { PROJECTS } from "../utils/data";
import ProjectCard from "../components/ProjectCard";
import { AnimatePresence, motion } from "framer-motion";

const ProjectSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <motion.section
      className="py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container p-4 max-w-[90%] mx-auto">
        <h1 className="text-2xl text-white font-semibold mb-12 ml-[-3rem]">Projects</h1>
        <div className={`grid gap-6 ${expandedId ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
          <AnimatePresence>
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isExpanded={expandedId === project.id}
                onClick={() => handleCardClick(project.id)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;