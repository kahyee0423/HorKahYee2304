"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
        <img
          src="/assets/CoreTeamGDSCPic/img-04.png"
          alt="intro pic"
          className="w-60 transition-transform duration-500 ease-in-out group-hover:translate-x-[-10%]"
        />
        <div className="text-center relative ml-10">
          <p className="text-6xl text-white font-sriracha transition-all duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-[-100%] group-hover:opacity-0">
            Meet Kah Yee
          </p>
          <blockquote className="absolute top-0 left-0 w-full transform translate-x-[100%] opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 text-lg leading-relaxed">
            <p className="italic text-white">
              "She is here with a voracious hunger to explore the arena by the
              adage 'Less is More'. Be that as it may, Kah Yee is more passionate
              about revealing eras and community development in her unique way.
              Truth be told, it is irrevocably her urge to discover how her
              abilities can revolutionize the planet."
            </p>
            <footer className="text-right text-white text-sm">
              - Kah Yee, EPCD Member at GDSC USM
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Onboarding Session Section */}
      <div className="flex flex-row p-8 justify-start items-center mt-8">
        <div className="flex flex-col items-start mr-25">
          <img
            src="/assets/CoreTeamGDSCPic/img-01.png"
            alt=""
            className="w-145 mb-6 border-2 border-white rounded-lg"
          />
          <img
            src="/assets/CoreTeamGDSCPic/img-02.png"
            alt=""
            className="w-145 mb-6 border-2 border-white rounded-lg"
          />
        </div>
        <div className="text-left text-white max-w-[60%]">
          <h3 className="text-2xl font-bold">"The Genesis of My Journey:</h3>
          <h3 className="text-2xl font-bold">GDSC USM Onboarding Session 23/24"</h3>
          <p className="italic mt-4">Where the story begins...</p>
        </div>
      </div>

      {/* Workshop Emcee Section */}
      <div className="flex flex-row p-8 justify-start items-start mt-8 ml-24">
        <div className="text-left text-white max-w-[40%] mt-44">
          <h3 className="text-2xl font-bold">"Commanding the Stage:</h3>
          <h3 className="text-2xl font-bold">My Debut as Workshop Emcee"</h3>
          <p className="italic">
            My debut as a workshop emcee was a thrilling challenge, refining my
            skills in audience engagement and event management.
          </p>
          <h5 className="mt-4">From Design to Interaction: Figma Prototyping Workshop</h5>
        </div>
        <div className="flex flex-col items-start ml-32">
          <img
            src="/assets/CoreTeamGDSCPic/img-03.jpg"
            alt=""
            className="w-full mb-6 border-2 border-white rounded-lg mt-12"
          />
        </div>
      </div>

      {/* Certification Section */}
      <div className="grid grid-cols-2 gap-8 p-8 mt-8 mb-20">
        <div className="flex justify-center items-center">
          <img
            src="/assets/CoreTeamGDSCPic/gdsc-cert.jpg"
            alt=""
            className="w-full max-w-[600px] border-2 border-white rounded-lg"
          />
        </div>
        <div className="text-left text-white mt-14 max-w-[70%]">
          <h3 className="text-2xl font-bold">"From Commitment to Certification:</h3>
          <h3 className="text-2xl font-bold">Core Team Member at EPCD GDSC USM 23/24"</h3>
          <p className="italic mt-4">
            Achieving Core Team Member certification at EPCD GDSC USM 23/24
            underscores my dedication and teamwork.
          </p>
        </div>
      </div>

      {/* Leading the Way Section */}
      <div className="w-full max-w-6xl mt-20">
        <h2 className="text-6xl font-boogaloo text-white text-center mb-10">
          Leading the Way: 24/25 Academic Session
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {/* HOD Section */}
          <div className="bg-white/5 border border-blue-900 rounded-lg p-10 transition-all duration-500 hover:bg-white/20">
            <img
              src="/assets/CoreTeamGDSCPic/hod.png"
              alt="Speakers 24/25"
              className="h-48 md:h-60 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ml-8"
            />
            <div className="text-white mt-4">
              <h3 className="text-2xl font-bold">"Head of Department:</h3>
              <h3 className="text-2xl font-bold">Event Planning and Culture Development 24/25"</h3>
              <p className="italic mt-4">
                Meet the inspiring speakers who will share their knowledge and
                experiences to empower the next generation of innovators.
              </p>
            </div>
          </div>

          {/* Hackathon Organizing Committee Section */}
          <div className="bg-white/10 rounded-lg p-6 transition-all duration-500 hover:bg-white/20">
            <div className="text-white mb-6">
              <h3 className="text-2xl font-bold">"Organizing Committee:</h3>
              <h3 className="text-xl font-bold">MY Universities Hackathon"</h3>
              <p className="italic mt-4">
                Meet the inspiring speakers who will share their knowledge and
                experiences to empower the next generation of innovators.
              </p>
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
              <SwiperSlide>
                <img
                  src="/assets/CoreTeamGDSCPic/hack-1.jpg"
                  alt="Speaker 1"
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/CoreTeamGDSCPic/hack-2.jpg"
                  alt="Speaker 2"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/CoreTeamGDSCPic/hack-3.jpg"
                  alt="Speaker 3"
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/CoreTeamGDSCPic/hack-4.jpg"
                  alt="Speaker 3"
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/CoreTeamGDSCPic/hack-5.jpg"
                  alt="Speaker 3"
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/CoreTeamGDSCPic/hack-6.jpg"
                  alt="Speaker 3"
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/CoreTeamGDSCPic/hack-7.jpg"
                  alt="Speaker 3"
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Speaker Section */}
          <div className="bg-white/10 rounded-lg p-6 transition-all duration-500 hover:bg-white/20">
            <div className="text-white mb-6">
              <h3 className="text-2xl font-bold">"Empowering Voices:</h3>
              <h3 className="text-2xl font-bold">Speakers of 24/25"</h3>
              <p className="italic mt-4">
                Meet the inspiring speakers who will share their knowledge and
                experiences to empower the next generation of innovators.
              </p>
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
              <SwiperSlide>
                <img
                  src="/assets/CoreTeamGDSCPic/sp-1.png"
                  alt="Speaker 1"
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/CoreTeamGDSCPic/sp-2.png"
                  alt="Speaker 2"
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/CoreTeamGDSCPic/sp-3.jpg"
                  alt="Speaker 3"
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/CoreTeamGDSCPic/sp-4.jpg"
                  alt="Speaker 1"
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/CoreTeamGDSCPic/sp-5.jpg"
                  alt="Speaker 2"
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/CoreTeamGDSCPic/sp-6.jpg"
                  alt="Speaker 3"
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/CoreTeamGDSCPic/sp-7.jpg"
                  alt="Speaker 3"
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <button
        onClick={() => router.push("/")}
        className="inline-block px-8 py-3 bg-[#7e61e7] mb-5 text-white font-bold rounded-lg mt-[70px] outline outline-1.5 outline-transparent transition-all duration-300 ease-in-out hover:bg-black hover:from-transparent hover:to-transparent hover:text-[#a993fe] hover:outline-[#a993fe] hover:scale-105 cursor-pointer"
      >
        Back To Home
      </button>
    </div>
  );
};

export default CoreTeamGDSC;