import data from "@/data/data";
import { NavLink } from "react-router-dom";
function SidebarLinks() {
  return (
    <ul>
      {data.NavBarLinks.map((item, index) => (
        <li key={index * 38473}>
          <NavLink
            to={item.link}
            className="font-bold w-full flex items-center px-6 py-3 mb-1 text-slate-500 transition-all hover:text-slate-700 hover:bg-slate-300/20 duration-[175]"
          >
            {item.icon}
            <p className="mx-4">{item.label}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
export default SidebarLinks;
