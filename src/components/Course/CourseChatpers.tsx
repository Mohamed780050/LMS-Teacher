import { RootState } from "@/Redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { Pencil, X } from "lucide-react";

function CourseChatpers() {
  const { id } = useParams();
  const { courseName } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );

  const [edit, setEdit] = useState(false);

  return (
    <div className="mt-6 boder bg-slate-100 rounded-md p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Course Chapters</h2>
        {edit ? (
          <Button variant="ghost" className="cursor-default">
            <X
              className="cursor-pointer duration-200 hover:text-red-700"
              onClick={() => setEdit(false)}
            >
              Cancel
            </X>
          </Button>
        ) : (
          <Button variant="ghost" className="cursor-default">
            <Pencil
              className="hover:text-sky-600 cursor-pointer"
              onClick={() => setEdit(true)}
            />
          </Button>
        )}
      </div>
      {edit ? (
        <div></div>
      ) : (
        <p className="font-medium text-sm">Course Chatpers</p>
      )}
    </div>
  );
}
export default CourseChatpers;
