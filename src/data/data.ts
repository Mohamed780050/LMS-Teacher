import { loginInputs, NavBarLinksType } from "@/interfaces/interfaces";
import { BarChart, LucideListVideo } from "lucide-react";
import React from "react";

const NavBarLinks: NavBarLinksType[] = [
  {
    icon: React.createElement(BarChart, { size: 30 }),
    label: "Analytics",
    link: "/",
  },
  {
    icon: React.createElement(LucideListVideo, { size: 30 }),
    label: "My Courses",
    link: "/mycourses",
  },
];

const LoginInputs: loginInputs[] = [
  { name: "identfire", placeholder: "Username or Email", type: "text" },
  { name: "password", placeholder: "Password", type: "password" },
];

export default { NavBarLinks, LoginInputs };
