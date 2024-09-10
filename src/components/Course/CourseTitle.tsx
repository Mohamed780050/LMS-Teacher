import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
function CourseTitle() {
  const { Course } = useSelector((state: RootState) => state.editingCourse);
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-medium">Course setup</h2>
      <p className="text-sm text-slate-700">
        Complete all fields ({Course.completed} / {Course.total})
      </p>
    </div>
  );
}
export default CourseTitle;
