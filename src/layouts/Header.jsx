import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_BAR_LINKS } from "../routes";

export default function Header() {
  return (
    <div className="  h-[72px] p-4 border border-b-primary">
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
        pathname === link?.path ? " text-highlight" : " text-primary"
      } underline-effect py-1 px-2 rounded font-bold text-lg`}
      to={link.path}
    >
      {link.label}
    </Link>
  );
};
