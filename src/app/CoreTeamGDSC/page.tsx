"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TEAM_DATA } from "../utils/data";
import Image from "next/image";

const CoreTeamGDSC = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#87ceeb] via-[#5a6ae1] to-[#00008b] flex flex-col items-center overflow-x-hidden">
      {/* Header Section */}
      <div className="w-full text-center py-5 text-white px-4">
        <h1 className="font-boogaloo text-4xl sm:text-5xl lg:text-6xl sm:mt-6">
          My Journey As An
          <span className="opacity-0 animate-revealText"> EPCD Member </span>
          of GDSC USM
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-[-4%] ">

        {/* Introduction Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full relative p-4 sm:p-6 lg:p-8 group my-8 sm:my-10 lg:my-12 gap-6 sm:gap-8 lg:gap-10">
          {/* Image Container */}
          <div className="relative w-full h-140 sm:w-2/3 md:w-1/2 lg:w-1/3 aspect-[2/3] max-w-[280px] mx-auto mb-6 sm:mb-8 lg:mb-0">
            <Image
              src={TEAM_DATA.introduction.image}
              alt="Introduction"
              fill
              className="transition-transform duration-500 ease-in-out group-hover:translate-x-[-10%] rounded-lg object-cover"
              priority
              sizes="(max-width: 1024px) 280px, 33vw"
            />
          </div>

          {/* Text Container */}
          <div className="text-center relative w-full lg:w-2/3 mb-10 sm:mb-12 lg:mb-0 px-2 sm:px-0">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-sriracha transition-all duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-[-100%] group-hover:opacity-0 mb-4 sm:mb-6">
              {TEAM_DATA.introduction.title}
            </p>
            <blockquote className="absolute top-0 left-0 w-full transform translate-x-[100%] opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 text-sm sm:text-base md:text-lg leading-relaxed">
              <p className="italic text-white mb-3 sm:mb-4">{TEAM_DATA.introduction.description}</p>
              <footer className="text-right text-white text-xs sm:text-sm md:text-base">
                {TEAM_DATA.introduction.footer}
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Onboarding Session Section */}
        <div className="flex flex-col lg:flex-row w-full p-4 sm:p-6 lg:p-8 my-8 lg:my-12 gap-6 lg:gap-10">
          <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-2/5">
            {TEAM_DATA.onboardingSession.images.map((image, index) => (
              <div key={index} className="relative w-full aspect-video max-w-md">
                <Image
                  src={image}
                  alt={`Onboarding session ${index + 1}`}
                  fill
                  className="border-2 border-white rounded-lg object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
          <div className="text-left text-white w-full lg:w-3/5 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold">{TEAM_DATA.onboardingSession.title}</h3>
            <p className="italic mt-3 sm:mt-4 text-base sm:text-lg">{TEAM_DATA.onboardingSession.description}</p>
          </div>
        </div>

        {/* Workshop Emcee Section */}
        <div className="flex flex-col lg:flex-row w-full p-4 sm:p-6 lg:p-8 my-8 lg:my-12 gap-6 lg:gap-10">
          <div className="text-left text-white w-full lg:w-2/5 order-2 lg:order-1 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold">{TEAM_DATA.workshopEmcee.title}</h3>
            <p className="italic mt-2 sm:mt-3 text-base sm:text-lg">{TEAM_DATA.workshopEmcee.description}</p>
            <h5 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold">{TEAM_DATA.workshopEmcee.subTitle}</h5>
          </div>
          <div className="relative w-full lg:w-3/5 aspect-video order-1 lg:order-2">
            <Image
              src={TEAM_DATA.workshopEmcee.image}
              alt="Workshop emcee"
              fill
              className="border-2 border-white rounded-lg object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>

        {/* Certification Section */}
        <div className="flex flex-col lg:flex-row w-full p-4 sm:p-6 lg:p-8 my-8 lg:my-12 gap-6 lg:gap-10">
          <div className="relative w-full h-80 lg:w-1/2 aspect-[4/3]">
            <Image
              src={TEAM_DATA.certification.image}
              alt="Certification"
              fill
              className="border-2 border-white rounded-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="text-left text-white w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold">{TEAM_DATA.certification.title}</h3>
            <p className="italic mt-3 sm:mt-4 text-base sm:text-lg">{TEAM_DATA.certification.description}</p>
          </div>
        </div>

        {/* Leading the Way Section */}
        <div className="w-full my-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-boogaloo text-white text-center mb-8 sm:mb-12 drop-shadow-lg">
            {TEAM_DATA.leadingTheWay.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {TEAM_DATA.leadingTheWay.sections.map((section, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 sm:p-8 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              >
                {section.type === "hod" && section.image && (
                  <>
                    <div className="relative w-75 h-90 aspect-square mx-auto">
                      <Image
                        src={section.image}
                        alt="HOD"
                        fill
                        className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
                        priority={index === 0}
                      />
                    </div>
                    <div className="text-white mt-4 sm:mt-5 text-center">
                      <h3 className="text-xl sm:text-2xl font-bold">{section.title}</h3>
                      <p className="italic mt-2 sm:mt-3 text-sm sm:text-base">{section.description}</p>
                    </div>
                  </>
                )}

                {["hackathon", "speakers", "project-director", "build-ai", "cloud"].includes(section.type) && (
                  <>
                    <div className="text-white text-center mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold">{section.title}</h3>
                      <p className="italic mt-2 sm:mt-3 text-sm sm:text-base">{section.description}</p>
                    </div>
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={10}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 3000, disableOnInteraction: false }}
                      loop={true}
                      modules={[Pagination, Autoplay]}
                      className="w-full"
                    >
                      {section.carouselImages?.map((image, idx) => (
                        <SwiperSlide key={idx}>
                          <div className="relative w-full aspect-[4/3]">
                            <Image
                              src={image}
                              alt={`Slide ${idx + 1}`}
                              fill
                              className="object-contain rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 sm:px-8 sm:py-3 bg-[#7e61e7] text-white font-bold rounded-lg my-12 outline outline-1.5 outline-transparent transition-all duration-300 ease-in-out hover:bg-black hover:text-[#a993fe] hover:outline-[#a993fe] hover:scale-105 cursor-pointer text-base sm:text-lg"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default CoreTeamGDSC;