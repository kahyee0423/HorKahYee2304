"use client";

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { piitramData } from '../utils/data';
import { PiitramData } from '../utils/types';
import Image from 'next/image';

const Piitram: React.FC = () => {
  const router = useRouter();
  const sliderRef = useRef<{ slickNext: () => void; slickPrev: () => void }>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { images, honors, gains, achievements } = piitramData as PiitramData;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
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
    sliderRef.current?.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 overflow-y-auto w-full">
      <section className="flex flex-col items-center justify-center text-white p-6 md:p-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center relative mb-16 group">
          <h1 className="font-boogaloo text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            My Journey As a
            <span className="block text-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              Participant for PIITRAM 2023
            </span>
          </h1>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-pulse"></div>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full max-w-4xl mt-12">
          <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={slideLeft}
              className="w-12 h-12 flex items-center justify-center text-purple-300 bg-gray-900/80 hover:bg-purple-900/60 backdrop-blur-sm border border-purple-500 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="w-full max-w-[600px] mx-auto">
            <Slider key={images.length} ref={sliderRef} {...settings}>
              {images.map((image, index) => (
                <div key={index} className="px-2">
                  <div className="relative w-full h-150 md:h-170px overflow-hidden rounded-xl border-2 border-purple-500/30 shadow-xl group">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={image}
                        alt={`Slide ${index}`}
                        width={600}
                        height={400}
                        className="max-w-full max-h-full"
                        priority={index === 0}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={slideRight}
              className="w-12 h-12 flex items-center justify-center text-purple-300 bg-gray-900/80 hover:bg-purple-900/60 backdrop-blur-sm border border-purple-500 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

          <div className="flex flex-col lg:flex-row gap-12 mt-20 w-full">
            {/* Honors Gallery */}
            <div className="w-full lg:w-4/5 xl:w-full">
              <div className="grid grid-cols-2 gap-8"> 
                {honors.map((honor, index) => (
                  <div
                    key={index}
                    className="relative w-full aspect-square p-18 border-2 border-purple-500/30 rounded-3xl bg-gray-900/60 backdrop-blur-sm transition-all duration-500 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-purple-900/40 transition-all duration-500"></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={honor}
                        alt={`Honor ${index}`}
                        width={400}
                        height={400}
                        className="max-w-[180%] max-h-[180%]"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>


          {/* Gains & Achievements */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-xl hover:shadow-purple-500/20 transition-all duration-500">
              <h2 className="text-3xl font-caveat font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                Premier Intellectual and Professional Gains
              </h2>
              <ul className="space-y-4">
                {gains.map((gain, index) => (
                  <li 
                    key={index} 
                    className="flex items-start text-lg text-purple-100 hover:text-white transition-colors duration-300"
                  >
                    <span className="inline-block w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {gain}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-4 border-purple-500/20 rounded-2xl p-8 bg-gradient-to-br from-teal-900/80 to-purple-900/80 backdrop-blur-sm shadow-lg hover:shadow-teal-500/20 transition-all duration-500">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                HONOURS & ACHIEVEMENTS
              </h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="flex items-center text-lg text-white/90 hover:text-white transition-colors duration-300"
                  >
                    <div className="relative w-6 h-6 mr-3 flex-shrink-0">
                      <Image
                        src={achievement.icon}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                    {achievement.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
        onClick={() => router.push("/")}
        className="inline-block px-8 py-3 bg-[#7e61e7] mb-5 text-white font-bold rounded-lg mt-[70px] outline outline-1.5 outline-transparent transition-all duration-300 ease-in-out hover:bg-black hover:from-transparent hover:to-transparent hover:text-[#a993fe] hover:outline-[#a993fe] hover:scale-105 cursor-pointer"
      >
        Back to Home
      </button>
      </section>
    </div>
  );
};

export default Piitram;