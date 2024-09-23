import { useSelector } from "react-redux";
import Logo from "./Logo";
import SidebarLinks from "./SidebarLinks";
import { RootState } from "@/Redux/store";

function Sidebar() {
  const { darkMood, bgColor } = useSelector((state: RootState) => state.global);
  return (
    <div
      className={`h-full border-r ${
        darkMood ? `bg-${bgColor} text-white` : "bg-white"
      } flex flex-col  shadow-sm`}
    >
      <div className="p-6">
        <Logo />
      </div>
      <SidebarLinks />
    </div>
  );
}
export default Sidebar;
