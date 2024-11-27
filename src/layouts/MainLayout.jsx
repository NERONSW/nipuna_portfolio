import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout() {
  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-col ">
      <Header />
      <div className="flex items-center justify-center ">
        <div className="flex flex-row flex-1 max-w-[1000px] ">
          <Sidebar />
          <div className="flex-1 min-h-0 h-screen overflow-auto p-4">
            <Outlet />
          </div>
        </div>
      </div>
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
