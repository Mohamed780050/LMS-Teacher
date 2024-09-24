import {
  loginInputs,
  NavBarLinksType,
  SignUpInputsType,
} from "@/interfaces/interfaces";
import {
  BarChart,
  BicepsFlexed,
  Camera,
  Cpu,
  HandCoins,
  LucideListVideo,
  PencilRuler,
} from "lucide-react";
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
const SignUpInputs: SignUpInputsType[] = [
  { name: "email", placeholder: "Email", type: "text" },
  { name: "username", placeholder: "Username", type: "text" },
  { name: "password", placeholder: "Password", type: "password" },
  { name: "confirmPassword", placeholder: "confirmPassword", type: "password" },
];
const CatagoryItmes = [
  {
    Icon: React.createElement(HandCoins, { size: 20, className: "mr-1" }),
    value: "Accounting",
    label: "Accounting",
  },
  {
    Icon: React.createElement(Cpu, { size: 20, className: "mr-1" }),
    value: "Computer Science",
    label: "Computer Science",
  },
  {
    Icon: React.createElement(BicepsFlexed, { size: 20, className: "mr-1" }),
    value: "Fitness",
    label: "Fitness",
  },
  {
    Icon: React.createElement(Camera, { size: 20, className: "mr-1" }),
    value: "Photography",
    label: "Photography",
  },
  {
    Icon: React.createElement(PencilRuler, { size: 20, className: "mr-1" }),
    value: "Engineering",
    label: "Engineering",
  },
];
export default { NavBarLinks, LoginInputs, SignUpInputs, CatagoryItmes };
