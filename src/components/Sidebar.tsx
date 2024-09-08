import Logo from "./Logo";
import SidebarLinks from "./SidebarLinks";

function Sidebar() {
  return (
    <div className="h-full border-r flex flex-col bg-white shadow-sm">
      <div className="p-6">
        <Logo/>
      </div>
      <div className="flex flex-col w-full">
        <SidebarLinks />
      </div>
    </div>
  );
}
export default Sidebar;