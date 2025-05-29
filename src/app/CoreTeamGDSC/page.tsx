"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TEAM_DATA } from "../utils/data";
import Image from "next/image";

/*type TeamData = {
  introduction: {
    image: string;
    title: string;
    description: string;
    footer: string;
  };
  onboardingSession: {
    images: string[];
    title: string;
    description: string;
  };
  workshopEmcee: {
    title: string;
    description: string;
    subTitle: string;
    image: string;
  };
  certification: {
    image: string;
    title: string;
    description: string;
  };
  leadingTheWay: {
    title: string;
    sections: Section[];
  };
};*/

const CoreTeamGDSC = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#87ceeb] via-[#5a6ae1] to-[#00008b] flex flex-col items-center overflow-y-auto">
      <div className="text-center py-5 text-white">
        <h1 className="font-boogaloo text-5xl">
          My Journey As An
          <span className="opacity-0 animate-revealText"> EPCD Member </span>
          of GDSC USM
        </h1>
      </div>

      {/* Introduction Section */}
      <div className="flex items-center justify-center w-full max-w-4xl relative p-8 group">
        <div className="relative w-60 h-60">
          <Image
            src={TEAM_DATA.introduction.image}
            alt="intro pic"
            fill
            className="transition-transform duration-500 ease-in-out group-hover:translate-x-[-10%] object-cover"
          />
        </div>
        <div className="text-center relative ml-10">
          <p className="text-6xl text-white font-sriracha transition-all duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-[-100%] group-hover:opacity-0">
            {TEAM_DATA.introduction.title}
          </p>
          <blockquote className="absolute top-0 left-0 w-full transform translate-x-[100%] opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 text-lg leading-relaxed">
            <p className="italic text-white">{TEAM_DATA.introduction.description}</p>
            <footer className="text-right text-white text-sm">
              {TEAM_DATA.introduction.footer}
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Onboarding Session Section */}
      <div className="flex flex-row p-8 justify-start items-center mt-8">
        <div className="flex flex-col items-start mr-25">
          {TEAM_DATA.onboardingSession.images.map((image, index) => (
            <div key={index} className="relative w-145 h-145 mb-6">
              <Image
                src={image}
                alt=""
                fill
                className="border-2 border-white rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
        <div className="text-left text-white max-w-[60%]">
          <h3 className="text-2xl font-bold">{TEAM_DATA.onboardingSession.title}</h3>
          <p className="italic mt-4">{TEAM_DATA.onboardingSession.description}</p>
        </div>
      </div>

      {/* Workshop Emcee Section */}
      <div className="flex flex-row p-8 justify-start items-start mt-8 ml-24">
        <div className="text-left text-white max-w-[40%] mt-44">
          <h3 className="text-2xl font-bold">{TEAM_DATA.workshopEmcee.title}</h3>
          <p className="italic">{TEAM_DATA.workshopEmcee.description}</p>
          <h5 className="mt-4">{TEAM_DATA.workshopEmcee.subTitle}</h5>
        </div>
        <div className="flex flex-col items-start ml-32">
          <div className="relative w-full h-96 mb-6">
            <Image
              src={TEAM_DATA.workshopEmcee.image}
              alt=""
              fill
              className="border-2 border-white rounded-lg mt-12 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Certification Section */}
      <div className="grid grid-cols-2 gap-8 p-8 mt-8 mb-20">
        <div className="flex justify-center items-center">
          <div className="relative w-full h-96 max-w-[600px]">
            <Image
              src={TEAM_DATA.certification.image}
              alt=""
              fill
              className="border-2 border-white rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="text-left text-white mt-14 max-w-[70%]">
          <h3 className="text-2xl font-bold">{TEAM_DATA.certification.title}</h3>
          <p className="italic mt-4">{TEAM_DATA.certification.description}</p>
        </div>
      </div>

      {/* Leading the Way Section */}
      <div className="w-full max-w-7xl mt-20 px-6">
        <h2 className="text-5xl font-boogaloo text-white text-center mb-12 drop-shadow-lg">
          {TEAM_DATA.leadingTheWay.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM_DATA.leadingTheWay.sections.map((section, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-10 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              {section.type === "hod" && section.image && (
                <>
                  <div className="relative w-70 h-70">
                    <Image
                      src={section.image}
                      alt="HOD"
                      fill
                      className="ml-4 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 object-cover"
                    />
                  </div>
                  <div className="text-white mt-5 text-center">
                    <h3 className="text-2xl font-bold">{section.title}</h3>
                    <p className="italic mt-3">{section.description}</p>
                  </div>
                </>
              )}

              {["hackathon", "speakers", "project-director"].includes(section.type) && (
                <>
                  <div className="text-white text-center mb-6">
                    <h3 className="text-2xl font-bold">{section.title}</h3>
                    <p className="italic mt-3">{section.description}</p>
                  </div>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                      640: { slidesPerView: 1 },
                      1024: { slidesPerView: 1 },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="w-full"
                  >
                    {section.carouselImages?.map((image, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="relative w-full h-64">
                          <Image
                            src={image}
                            alt={`Slide ${idx + 1}`}
                            fill
                            className="object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
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

      <button
        onClick={() => router.push("/")}
        className="inline-block px-8 py-3 bg-[#7e61e7] mb-5 text-white font-bold rounded-lg mt-[70px] outline outline-1.5 outline-transparent transition-all duration-300 ease-in-out hover:bg-black hover:from-transparent hover:to-transparent hover:text-[#a993fe] hover:outline-[#a993fe] hover:scale-105 cursor-pointer"
      >
        Back to Home
      </button>
    </div>
  );
};

export default CoreTeamGDSC;