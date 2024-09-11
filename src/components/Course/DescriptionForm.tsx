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

function DescriptionForm() {
  const { id } = useParams();
  const { Description } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  const { handleSubmit, register } = useForm<{ newDescription: string }>({
    resolver: zodResolver(validate.DescriptionUpdate),
  });
  const [edit, setEdit] = useState(false);
  function updateIt(values: z.infer<typeof validate.DescriptionUpdate>) {
    updateCourseInfo({ id: `${id}`, values: values });
    console.log(values);
    setEdit(false);
  }
  return (
    <div className="md:mt-6 boder bg-slate-100 rounded-md p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Course Description</h2>
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
        <form className="space-y-2" onSubmit={handleSubmit(updateIt)}>
          <Input
            {...register("newDescription")}
            defaultValue={Description}
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
        <p className="font-medium text-sm">{Description}</p>
      )}
    </div>
  );
}
export default DescriptionForm;
