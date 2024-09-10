import { LayoutDashboard } from "lucide-react";
import IconBage from "../IconBadge";

function CustomizeCourse() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center">
        <IconBage icon={LayoutDashboard} />
        <h2 className="text-xl">Customize your course</h2>
      </div>
    </div>
  );
}
export default CustomizeCourse;
