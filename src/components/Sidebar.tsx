import { useSelector } from "react-redux";
import Logo from "./Logo";
import SidebarLinks from "./SidebarLinks";
import { RootState } from "@/Redux/store";

function Sidebar() {
  const {dark} = useSelector((state:RootState) => state.mood)
  return (
    <div
      className={`h-full border-r ${dark ? "bg-black text-white" : ""} flex flex-col bg-white shadow-sm`}
    >
      <div className="p-6">
        <Logo />
      </div>
      <SidebarLinks />
    </div>
  );
}
export default Sidebar;
