import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Axios from "@/config/Axios";
import { editCourse } from "@/Redux/editingCourse";
import validate from "@/validation/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import z from "zod";

function CreateACourse() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof validate.MakeCourseName>>({
    resolver: zodResolver(validate.MakeCourseName),
  });

  async function MakeACourse(values: z.infer<typeof validate.MakeCourseName>) {
    try {
      const key = localStorage.getItem("data");
      const data = key ? JSON.parse(key) : null;
      const response = await Axios.post("/courses", {
        ...values,
        AuthorId: data.info.id,
      });
      dispatch(editCourse(response.data));
      Navigate(`/mycourses/editeCourse/${response.data._id}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      throw Error(err?.message);
    }
  }

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:items-center md:justify-center h-full p-6">
      <div className="space-y-1">
        <h2 className="text-2xl">Name your new course</h2>
        <p className="text-sm text-slate-500">
          What would you like to name your course? Don't worry, you can change
          this later.
        </p>
        <form className="space-y-3" onSubmit={handleSubmit(MakeACourse)}>
          <label htmlFor="courseName">Course name</label>
          <Input
            disabled={isSubmitting}
            id="courseName"
            {...register("courseName")}
            placeholder="What is your course's name?"
          />
          {errors.courseName && <p className="text-red-600">{errors.courseName.message}</p>}
          <div className="space-x-3">
            <Button disabled={isSubmitting} type="submit">
              Create
            </Button>
            <Button disabled={isSubmitting} variant="destructive">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateACourse;
