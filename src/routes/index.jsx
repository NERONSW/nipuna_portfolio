import { lazy } from "react";

export const NAV_BAR_LINKS = [
  {
    key: "home",
    label: "Home",
    path: "/",
    component: lazy(() => import("../pages/home/Home")),
    // icon: <DashboardIcon size={24} />,
  },
  {
    key: "experience",
    label: "Experience",
    path: "/experience",
    component: lazy(() => import("../pages/experience/Experience")),
    // icon: <DashboardIcon size={24} />,
  },
  {
    key: "education",
    label: "Education",
    path: "/education",
    component: lazy(() => import("../pages/education/Education")),
    // icon: <DashboardIcon size={24} />,
  },
  {
    key: "projects",
    label: "Projects",
    path: "/projects",
    component: lazy(() => import("../pages/projects/Projects")),
    // icon: <DashboardIcon size={24} />,
  },
];
