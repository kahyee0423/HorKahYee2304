import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isExpanded, onClick }) => {
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
              <img
                src={image}
                alt={`${project.title} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
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

export default ProjectCard;