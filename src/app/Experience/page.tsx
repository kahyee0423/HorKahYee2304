"use client";

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import ExperienceCard from "../Experience/ExperienceCard/page";
import { EXPERIENCE } from "../utils/data";
import Link from "next/link";

const Experience = () => {
  const sliderRef = useRef<InstanceType<typeof Slider> | null>(null); 
  const experienceRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const settings = {
    dots: false,
    infinite: EXPERIENCE.length > 2, 
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    console.log("Sliding Right..."); 
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const slideLeft = () => {
    console.log("Sliding Left..."); 
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={experienceRef}
      className={`relative p-4 max-w-[90%] mx-auto opacity-0 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : ""
      }`}
    >
      <h5 className="text-2xl text-white font-semibold mb-12 ml-[-3rem]">
        Leadership & Volunteering Experience
      </h5>

      <div className="relative">
        {/* Left Button */}
        <div
          className="absolute top-1/2 left-[-3rem] transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-purple-600 bg-[#130f2a] border border-purple-600 rounded-lg cursor-pointer z-50"
          onClick={slideLeft}
        >
          &lt;
        </div>

        {/* Right Button */}
        <div
          className="absolute top-1/2 right-[-3rem] transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-purple-600 bg-[#130f2a] border border-purple-600 rounded-lg cursor-pointer z-50"
          onClick={slideRight}
        >
          &gt;
        </div>

        <Slider ref={sliderRef} {...settings}>
          {EXPERIENCE.map((item) => (
            <Link href={item.route} key={item.title} className="block">
              <ExperienceCard details={item} />
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Experience;
