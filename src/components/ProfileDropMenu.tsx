import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UserRound, ImagePlus, LogOut, Info } from "lucide-react";
function ProfileDropMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="rounded-full w-16 h-16">
          <UserRound size={30} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="flex items-center space-x-1">
            {/* <Settings /> */}
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
