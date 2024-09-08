import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
function Main() {
  return (
    <div className="h-full select-none">
      <header className="h-[80px] w-full border-b shadow-sm fixed inset-0 z-50">
        <NavBar />
      </header>
      <div className="hidden md:flex h-full w-56 flex-col border-r shadow fixed inset-y-0 left-0 z-50">
        <Sidebar></Sidebar>
      </div>
      <main className="md:pl-56 pt-[80px] h-screen">
        <Outlet />
      </main>
    </div>
  );
}
export default Main;
