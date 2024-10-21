import {
  CircleDollarSign,
  File,
  LayoutDashboard,
  ListChecks,
} from "lucide-react";
import IconBage from "../IconBadge";
import TitleForm from "./TitleForm";
import DescriptionForm from "./DescriptionForm";
import ImageSelector from "./ImageSelector";
import Catagory from "./Catagory";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import getAndSetCourseInfo from "@/config/getCourse";
import CourseChatpers from "./Chapters/CourseChatpers";
import PriceForm from "./PriceForm";
import CourseAttachment from "./CourseAtatchment";
import { Skeleton } from "../ui/skeleton";

function CustomizeCourse() {
  const { id } = useParams();
  const { Course } = useSelector((state: RootState) => state.editingCourse);
  const { loading } = useSelector((state: RootState) => state.global);
  if (Course._id === "") {
    getAndSetCourseInfo(`${id}`);
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        <div className="space-y-6">
          <div className="flex items-center space-x-1">
            <IconBage icon={LayoutDashboard} />
            <h2 className="text-xl">Customize your course</h2>
          </div>
          {loading ? <Skeleton className="w-full h-[96px]" /> : <TitleForm />}
          {loading ? (
            <Skeleton className="w-full h-[96px]" />
          ) : (
            <DescriptionForm />
          )}
          {loading ? (
            <Skeleton className="w-full h-[311.15px]" />
          ) : (
            <ImageSelector />
          )}
          {loading ? <Skeleton className="w-full h-[104px]" /> : <Catagory />}
        </div>
        <div className="space-y-6">
          {/* Course Chapter */}
          <div className="flex items-center space-x-1">
            <IconBage icon={ListChecks} />
            <h2 className="text-xl">Course chapters</h2>
          </div>

          {loading ? (
            <Skeleton className="w-full h-[300x]" />
          ) : (
            <CourseChatpers />
          )}

          {/* Course Price */}
          <div className="flex items-center space-x-1">
            <IconBage icon={CircleDollarSign} />
            <h2 className="text-xl">Sell your course</h2>
          </div>
          {loading ? <Skeleton className="w-full h-[104px]" /> : <PriceForm />}
          {/* Course Resourses and Attachment */}
          <div className="flex items-center space-x-1">
            <IconBage icon={File} />
            <h2 className="text-xl">Course Resourses</h2>
          </div>
          {loading ? (
            <Skeleton className="w-full h-[300x]" />
          ) : (
            <CourseAttachment />
          )}
        </div>
      </div>
    </>
  );
}
export default CustomizeCourse;
