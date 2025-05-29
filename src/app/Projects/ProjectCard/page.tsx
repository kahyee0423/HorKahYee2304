"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  images: string[];
  description: string;
  techStack: string[];
  githubLink: string;
  Contributor?: string;
  partner?: string;
}

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onClick: () => void;
}

const ProjectCardComponent: React.FC<ProjectCardProps> = ({ project, isExpanded, onClick }) => {
  const images = Array.isArray(project.images) ? project.images : [project.images || ""];

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
        isExpanded ? "col-span-2 row-span-2" : "cursor-pointer hover:shadow-xl"
      }`}
      onClick={onClick}
    >
      {/* Swiper Carousel for Images */}
      <div className={`w-full ${isExpanded ? "h-96" : "h-48"} overflow-hidden transition-all duration-500 ease-in-out`}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-6 transition-all duration-500 ease-in-out">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech: string, index: number) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {isExpanded && (
          <>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              View on GitHub
            </a>
            {project.Contributor && (
              <p className="mt-4 text-sm text-gray-500">
                Contributor: {project.Contributor}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default function ProjectCard() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const sampleProject: Project = {
    id: 1,
    title: "Sample Project",
    images: ["/sample-project.jpg"],
    description: "This is a sample project description.",
    techStack: ["React", "Next.js", "TypeScript"],
    githubLink: "https://github.com/username/project",
    Contributor: "John Doe"
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Project Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCardComponent
          project={sampleProject}
          isExpanded={expandedProject === sampleProject.id}
          onClick={() => setExpandedProject(expandedProject === sampleProject.id ? null : sampleProject.id)}
        />
      </div>
    </div>
  );
}