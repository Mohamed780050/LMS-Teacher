import { LayoutDashboard } from "lucide-react";
import IconBage from "../IconBadge";
import TitleForm from "./TitleForm";

function CustomizeCourse() {
  return (
    <>
      <div className="flex items-center">
        <IconBage icon={LayoutDashboard} />
        <h2 className="text-xl">Customize your course</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <TitleForm />
      </div>
    </>
  );
}
export default CustomizeCourse;
