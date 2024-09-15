import { RootState } from "@/Redux/store";
import { X, Pencil } from "lucide-react";
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
import Spiner from "../Spiner";

function TitleForm() {
  const { id } = useParams();
  const { courseName } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<{ newCourseName: string }>({
    resolver: zodResolver(validate.CourseNameUpdate),
  });
  const [edit, setEdit] = useState(false);
  function updateIt(values: z.infer<typeof validate.CourseNameUpdate>) {
    updateCourseInfo({ id: `${id}`, values: values });
    console.log(values);
    setEdit(false);
  }
  return (
    <div className="mt-6 boder bg-slate-100 rounded-md p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Course Name</h2>
        {edit ? (
          <Button
            disabled={isSubmitting}
            variant="ghost"
            className="cursor-default"
          >
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
        <form className="space-y-2" onSubmit={handleSubmit(updateIt)}>
          <Input
            {...register("newCourseName")}
            defaultValue={courseName}
            className="rounded-none bg-white"
            disabled={isSubmitting}
          />
          <div className="space-x-2">
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? <Spiner /> : "save"}
            </Button>
            <Button
              disabled={isSubmitting}
              variant="destructive"
              type="button"
              onClick={() => setEdit(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <p className="font-medium text-sm">{courseName}</p>
      )}
    </div>
  );
}
export default TitleForm;
