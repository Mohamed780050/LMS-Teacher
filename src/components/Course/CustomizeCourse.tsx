import { LayoutDashboard } from "lucide-react";
import IconBage from "../IconBadge";
import TitleForm from "./TitleForm";
import DescriptionForm from "./DescriptionForm";
import ImageSelector from "./ImageSelector";
import Catagory from "./Catagory";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import getAndSetCourseInfo from "@/config/getCourse";

function CustomizeCourse() {
  const { id } = useParams();
  const { Course } = useSelector((state: RootState) => state.editingCourse);
  if (Course._id === "") {
    getAndSetCourseInfo(`${id}`);
  }
  return (
    <>
      <div className="flex items-center">
        <IconBage icon={LayoutDashboard} />
        <h2 className="text-xl">Customize your course</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-6">
          <TitleForm />
          <DescriptionForm />
          <ImageSelector />
          <Catagory />
        </div>
      </div>
    </>
  );
}
export default CustomizeCourse;
