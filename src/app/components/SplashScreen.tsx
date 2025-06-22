"use client";

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";

export interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [showImage, setShowImage] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setShowImage(true);
    }, 1000);

    const completionTimer = setTimeout(() => {
      console.log("Splash done");
      setIsVisible(false);
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sparkles
          count={100}
          size={2}
          speed={0.8}
          color="#ffffff"
          position={[0, 0, 0]}
          scale={[10, 10, 10]}
        />
        <OrbitControls enabled={!showImage} />
      </Canvas>

      <motion.div
        className="absolute text-white text-center max-w-[90%] break-words"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: showImage ? 120 : 0,
        }}
        transition={{ opacity: { duration: 1 }, y: { duration: 1 } }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Immerse yourself in Kah Yee&apos;s portfolio
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg">
          A showcase of sophisticated achievements and visionary craftsmanship
        </p>
      </motion.div>

      {showImage && (
        <motion.div
          className="absolute top-20 left-1/2 transform -translate-x-1/2 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="./assets/general/splash-pic-name.png"
            alt="Portfolio showcase"
            fill
            className="object-contain"
          />
        </motion.div>
      )}
    </div>
  );
};

export default SplashScreen;