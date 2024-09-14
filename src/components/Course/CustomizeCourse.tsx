import { LayoutDashboard } from "lucide-react";
import IconBage from "../IconBadge";
import TitleForm from "./TitleForm";
import DescriptionForm from "./DescriptionForm";
import ImageSelector from "./ImageSelector";

function CustomizeCourse() {
  return (
    <>
      <div className="flex items-center">
        <IconBage icon={LayoutDashboard} />
        <h2 className="text-xl">Customize your course</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TitleForm />
        <DescriptionForm />
        <ImageSelector />
      </div>
    </>
  );
}
export default CustomizeCourse;
