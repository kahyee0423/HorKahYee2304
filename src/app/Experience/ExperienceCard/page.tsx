"use client";

import React from "react";
import ExperienceCard from "../../components/ExperienceCard";

const sampleExperiences = [
  {
    title: "Software Engineer",
    date: "2023 - Present",
    details: [
      "Developed and maintained web applications using React and Next.js",
      "Implemented responsive designs and optimized performance",
      "Collaborated with cross-functional teams on project delivery"
    ]
  },
  {
    title: "Frontend Developer",
    date: "2022 - 2023",
    details: [
      "Built user interfaces with modern JavaScript frameworks",
      "Created reusable components and maintained code quality",
      "Worked on improving application accessibility"
    ]
  }
];

export default function ExperienceCardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleExperiences.map((experience, index) => (
          <ExperienceCard key={index} details={experience} />
        ))}
      </div>
    </div>
  );
}