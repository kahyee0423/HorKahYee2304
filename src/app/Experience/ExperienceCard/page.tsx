import React from "react";

interface ExperienceDetails {
  title: string;
  date: string;
  details: string[];
}

interface ExperienceCardProps {
  details: ExperienceDetails;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ details }) => {
  return (
    <div className="bg-transparent border border-purple text-white rounded-lg p-6 mx-4 h-full min-h-[500px] max-h-[500px] cursor-pointer transition-all duration-300 ease-in-out hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/20">
      <h6 className="text-xl font-semibold mb-4">
        {details.title}
      </h6>
      <div className="inline-block text-sm font-normal bg-purple-600 rounded-md px-3 py-1 mb-6 border border-purple-600/50">
        {details.date}
      </div>
      <ul className="list-none">
        {details.details.map((item: string, index: number) => (
          <li
            key={index}
            className="text-sm font-normal mb-3 relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-900 before:rounded-full"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg z-[-1]"></div>
    </div>
  );
};

export default ExperienceCard;