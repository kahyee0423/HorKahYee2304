"use client";

import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen/page";
import HeroSection from "./Hero/page";
import Navbar from "./NavBar/page";
import ContactDrawer from "./ContactDrawer/page";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");
    if (hasSeenSplash === "true") {
      setShowSplash(false); 
    }
  }, []);

  const handleSplashComplete = () => {
    localStorage.setItem("hasSeenSplash", "true"); 
    setShowSplash(false);
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <div className="min-h-screen flex flex-col w-full">
          <Navbar />
          <main className="flex-grow min-h-[calc(100vh-100px)]">
            <HeroSection isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
            <ContactDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
          </main>
        </div>
      )}
    </>
  );
};

export default Home;