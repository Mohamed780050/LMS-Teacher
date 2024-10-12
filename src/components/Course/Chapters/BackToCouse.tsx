import { RootState } from "@/Redux/store";
import { ArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function BackToCouse() {
  const { CourseId } = useSelector((state: RootState) => state.Chapter.chapter);
  return (
    <Link
      className="flex items-center text-sm hover:opacity-75 transition mb-6"
      to={`/mycourses/editeCourse/${CourseId}`}
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back to couse setup
    </Link>
  );
}
export default BackToCouse;
