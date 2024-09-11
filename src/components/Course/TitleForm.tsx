import { RootState } from "@/Redux/store";
import { Pencil } from "lucide-react";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import updateCourseInfo from "@/config/UpdateCourseInfo";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import validate from "@/validation/validate";
import { z } from "zod";

function TitleForm() {
  const { id } = useParams();
  const { courseName } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  const { handleSubmit, register } = useForm<{ newCourseName: string }>({
    resolver: zodResolver(validate.CourseNameUpdate),
  });
  const [edit, setEdit] = useState(false);
  function updateIt(values: z.infer<typeof validate.CourseNameUpdate>) {
    updateCourseInfo({ id: `${id}`, values: values });
    console.log(values);
  }
  return (
    <div className="mt-6 boder bg-slate-100 rounded-md p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Course Name</h2>
        {edit ? (
          <Button variant="destructive" onClick={() => setEdit(false)}>
            Cancel
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
        <form className="space-y-2" onSubmit={handleSubmit(updateIt)}>
          <Input
            {...register("newCourseName")}
            defaultValue={courseName}
            className="rounded-none bg-white"
          />
          <div className="space-x-2">
            <Button type="submit">save</Button>
            <Button
              variant="destructive"
              type="button"
              onClick={() => setEdit(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        courseName
      )}
    </div>
  );
}
export default TitleForm;
