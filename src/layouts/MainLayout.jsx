import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout() {
  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-col">
      <Header />
      <div className="flex flex-row flex-1">
        <Sidebar />
        <div className="flex-1 min-h-0 overflow-auto p-4">
          <Outlet />
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
