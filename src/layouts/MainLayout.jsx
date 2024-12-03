import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-col ">
      <Header />
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <div className="flex flex-row w-full max-w-[1000px] h-full">
          {/* Sidebar */}
          <div className="w-[250px] bg-gray-200 h-full overflow-auto">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-h-0 p-4 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </div>

    // <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
    //   <Sidebar />
    //   <div className="">
    //     <Header />
    //     <div className="flex-1 min-h-0 overflow-auto">
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>
  );
}
