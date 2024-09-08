import {
  loginInputs,
  NavBarLinksType,
  SignUpInputsType,
} from "@/interfaces/interfaces";
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
const SignUpInputs: SignUpInputsType[] = [
  { name: "email", placeholder: "Email", type: "text" },
  { name: "username", placeholder: "Username", type: "text" },
  { name: "password", placeholder: "Password", type: "password" },
  { name: "confirmPassword", placeholder: "confirmPassword", type: "password" },
];

export default { NavBarLinks, LoginInputs, SignUpInputs };
