import { NavBarLinksType } from "@/interfaces/interfaces";
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
    link: "/courses",
  },
];
export default { NavBarLinks };
