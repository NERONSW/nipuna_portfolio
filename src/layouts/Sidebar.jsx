import React, { useEffect, useState } from "react";
import Profile_pic from "../assets/images/boy.jpg";

export default function Sidebar() {
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
    <div
      // className="max-w-[296px] px-6 pt-[18px] pb-[28px] flex-col h-screen  bg-red-300 hidden lg:block lg:duration-300"
      className={`max-w-[296px] bg-red-300 transition-all duration-300 ease-in-out transform 
        ${
          isLargeScreen
            ? "opacity-100 scale-100 block"
            : "opacity-0 scale-95 hidden"
        }`}
    >
      <img className=" rounded-full" src={Profile_pic} />
    </div>
  );
}
