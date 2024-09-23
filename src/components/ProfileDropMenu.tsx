import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { changeMood } from "@/Redux/globla";
import { RootState } from "@/Redux/store";
import { UserRound, ImagePlus, LogOut, Info, Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
function ProfileDropMenu() {
  const { darkMood, bgColor } = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={`border rounded-full w-16 h-16 ${
            darkMood ? `bg-${bgColor} border-slate-500` : ""
          }`}
        >
          <UserRound size={30} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
      style={{backgroundColor:`${darkMood ? `${bgColor}` : ""}`}}
        className={`w-80 ${darkMood ? `bg-${bgColor} text-white` : ""}`}
      >
        <div className="grid gap-4">
          <div className="flex items-center space-x-1">
            <h4 className="font-medium text-xl leading-none">Profile</h4>
          </div>
          <div className="grid gap-2">
            <Button
              variant="ghost"
              className="text-lg w-full justify-start py-6"
            >
              <Info className="mr-1" />
              Change Info
            </Button>
            <Button
              variant="ghost"
              className="text-lg w-full justify-start py-6"
            >
              <ImagePlus className="mr-1" />
              Change Image
            </Button>
            <Button
              variant="ghost"
              className="text-lg w-full justify-start py-6"
              onClick={() => {
                const root = document.getElementById("root");
                root?.classList.toggle("dark");
                dispatch(changeMood());
              }}
            >
              {darkMood ? <Sun className="mr-1" /> : <Moon className="mr-1" />}
              Change Theme
            </Button>

            <Button
              variant="ghost"
              className="text-lg w-full justify-start py-6"
              onClick={() => {
                document.cookie =
                  "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                window.location.reload();
              }}
            >
              <LogOut className="mr-1" />
              Logout
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
export default ProfileDropMenu;
