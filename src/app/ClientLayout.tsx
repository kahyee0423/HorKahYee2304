"use client";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import ContactDrawer from "./components/ContactDrawer";

export const DrawerContext = React.createContext({
  openDrawer: () => {},
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);

  return (
    <DrawerContext.Provider value={{ openDrawer }}>
      {children}

      {isDrawerOpen && (
        <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30 transition-opacity"></div>
      )}

      <button
        onClick={openDrawer}
        className="fixed top-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Open Contact Drawer"
      >
        <FaEnvelope size={24} />
      </button>

      <ContactDrawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </DrawerContext.Provider>
  );
}