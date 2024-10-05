import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import { RootState } from "@/Redux/store";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { WifiOff,Wifi } from "lucide-react";
window.addEventListener("offline", () => {
  toast.error("You are offline", {
    icon: <WifiOff />,
  });
  console.log(navigator.onLine);
});
window.addEventListener("online", () => {
  toast.success("You are online",{
    icon:<Wifi className="text-emerald-500"/>
  });
  console.log(navigator.onLine);
});
function Main() {
  const { darkMood, bgColor } = useSelector((state: RootState) => state.global);
  return (
    <>
      <div
        style={{ backgroundColor: `${darkMood ? `${bgColor}` : ""}` }}
        className={`h-full select-none  dark:text-white`}
      >
        <header className="h-[80px] w-full border-b shadow-sm fixed inset-0 z-50">
          <NavBar />
        </header>
        <div className="hidden md:flex h-full  w-56 flex-col border-r shadow fixed inset-y-0 left-0 z-50">
          <Sidebar />
        </div>
        <main className="md:pl-56 pt-[80px] min-h-screen">
          <Outlet />
        </main>
      </div>
    </>
  );
}
export default Main;
