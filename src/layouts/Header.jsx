import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  return (
    <div className=" bg-blue-300 h-[72px] p-4">
      <div className="flex items-center justify-center gap-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/experience"}>Experience</Link>
      </div>
    </div>
  );
}
