"use client";

import React from "react";

interface HangingImageProps {
  src: string;
  alt: string;
  className?: string; // Add className prop
}

const HangingImage: React.FC<HangingImageProps> = ({ src, alt, className }) => {
  return (
    <div className="relative flex justify-center items-center mx-auto my-12 max-w-[150px] w-full">
      {/* Left String */}
      <div className="absolute h-[4px] bg-white left-1/4 top-[-25px] w-[240px] -rotate-12 -z-10 -ml-[200px] md:w-[220px] md:left-[11rem] lg:w-[225px] lg:left-[14rem] lg:top-[-8%] lg:mt-[2.3rem] xl:w-[210px] xl:top-[8%] xl:left-1/2 sm:hidden" />

      {/* Nut */}
      <div className="absolute top-[-55px] left-1/2 transform -translate-x-1/2 w-[15px] h-[15px] bg-gray-300 rounded-full border-2 border-gray-700 z-20 md:ml-[7rem] lg:ml-[10rem] lg:top-[-5%] xl:top-[9%] xl:ml-0 sm:hidden" />

      {/* Right String */}
      <div className="absolute h-[4px] bg-white right-1/4 top-[-25px] w-[240px] rotate-12 -z-10 -mr-[200px] md:w-[220px] md:left-[11rem] lg:w-[225px] lg:left-[14rem] lg:top-[-8%] lg:mt-[2.3rem] xl:w-[210px] xl:top-[8%] xl:right-[70%] xl:-ml-[10rem] sm:hidden" />

      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={`block border-2 border-gray-300 rounded-lg ${className}`} // Use className prop
      />
    </div>
  );
};

export default HangingImage;