"use client";

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { piitramData } from '../utils/data';
import { PiitramData } from '../utils/types';

const Piitram: React.FC = () => {
  const router = useRouter();
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Slider Ref:', sliderRef.current);
  }, []);

  const { images, honors, gains, achievements } = piitramData as PiitramData;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    sliderRef.current?.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-purple-500 overflow-y-auto">
      <section className="flex flex-col items-center justify-center text-white p-4">
        <div className="text-center relative">
          <h1 className="font-boogaloo text-6xl font-normal">
            My Journey As a
            <span className="opacity-0 animate-revealText"> Participant </span>
            for PIITRAM 2023
          </h1>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-700 animate-underline"></div>
        </div>

        <div className="relative mt-8" style={{ height: '500px' }}>
        <div
          className="absolute top-1/2 left-[-3rem] transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-purple-600 bg-[#130f2a] border border-purple-600 rounded-lg cursor-pointer z-50"
          onClick={slideLeft}
        >
          &lt;
        </div>

        <div className="w-full mt-15 flex justify-center">
          <div className="w-[400px]">
            <Slider key={images.length} ref={sliderRef} {...settings}>
              {images.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-96 h-96 overflow-hidden rounded-lg border-2 border-purple-700 flex justify-center items-center">
                    <img
                      src={image}
                      alt={`Slide ${index}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error("Failed to load image:", image);
                        e.currentTarget.src = "/path/to/fallback-image.jpg";
                      }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div
          className="absolute top-1/2 right-[-3rem] transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-purple-600 bg-[#130f2a] border border-purple-600 rounded-lg cursor-pointer z-50"
          onClick={slideRight}
        >
          &gt;
        </div>
      </div>

        <div className="flex justify-between mt-20 w-full">
          <div className="grid grid-cols-2 gap-4 w-1/2">
            {honors.map((honor, index) => (
              <img
                key={index}
                src={honor}
                alt={`Honor ${index}`}
                className="w-full p-4 border-2 border-purple-700 rounded-lg"
                onError={(e) => console.error('Failed to load image:', honor)}
              />
            ))}
          </div>

         <div className="w-1/2 ml-8">
            <h2 className="text-4xl font-caveat font-bold border-2 border-purple-700 text-center w-3/4 mx-auto">
              Premier Intellectual and Professional Gains from My Engagement
            </h2>
            <ul className="text-xl mt-12 ml-12">
              {gains.map((gain, index) => (
                <p key={index}>&#10003; {gain}</p>
              ))}
            </ul>

            <div className="border-4 border-gray-300 p-4 mt-24 w-160 bg-teal-600">
              <h4 className="text-xl text-white mb-4">HONOURS AND ACHIEVEMENT</h4>
              {achievements.map((achievement, index) => (
                <p key={index} className="text-lg text-white flex items-center mt-4">
                  <img src={achievement.icon} alt="" className="mr-2 w-5 h-5" />
                  {achievement.text}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-6 mb-8">
          <button
            className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-black hover:text-purple-400 transition-all duration-300"
            onClick={() => router.push('/')}
          >
            Back To Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default Piitram;