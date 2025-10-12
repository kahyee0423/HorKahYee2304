import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export interface Project {
  id: number;
  title: string;
  images: string[];
  description: string;
  techStack: string[];
  githubLink: string;
  Contributor?: string;
  partner?: string;
}

export interface ProjectCardProps {
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
      <div className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "h-[500px]" : "h-48"}`}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={`relative w-full h-full flex justify-center items-center bg-gray-100`}>
                <Image
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="p-6">
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