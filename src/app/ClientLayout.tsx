"use client";

import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import ContactDrawer from "./components/ContactDrawer"; // adjust path if needed

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {children}

      <button
        onClick={() => setIsDrawerOpen(true)}
        className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Open Contact Drawer"
      >
        <FaEnvelope size={24} />
      </button>

      <ContactDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
}
