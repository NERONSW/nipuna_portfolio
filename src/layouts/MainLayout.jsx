import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Function to check screen size
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024); // "lg" breakpoint is 1024px in Tailwind
  };

  useEffect(() => {
    // Set the initial screen size
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-col">
      {/* Header */}
      <Header />
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <div className="flex flex-row w-full max-w-[1000px] h-full">
          {/* Sidebar */}
          <div>
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col p-4 min-h-0">
            <div className="flex-1 min-h-0 overflow-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
