import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import CourseAction from "./CourseAction";
function CourseTitle() {
  const { Course } = useSelector((state: RootState) => state.editingCourse);
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <h2 className="text-2xl font-medium">Course setup</h2>
        <p className="text-sm text-slate-700">
          Complete all fields ({Course.completed} / {Course.total})
        </p>
      </div>
      <CourseAction/>
    </div>
  );
}
export default CourseTitle;
