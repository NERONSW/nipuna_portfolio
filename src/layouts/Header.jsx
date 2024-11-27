import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_BAR_LINKS } from "../routes";

export default function Header() {
  return (
    <div className=" bg-blue-300 h-[72px] p-4">
      <div className="flex items-center justify-center gap-4">
        {NAV_BAR_LINKS.map((link) => {
          return <NavBarLink key={link.key} link={link} />;
        })}
      </div>
    </div>
  );
}

const NavBarLink = ({ link }) => {
  console.log("link :", link);
  const { pathname } = useLocation();
  console.log("pathname :", pathname);
  return (
    <Link
      className={`${
        pathname === link?.path ? " bg-red-200  text-black" : " text-white"
      }`}
      to={link.path}
    >
      {link.label}
    </Link>
  );
};
