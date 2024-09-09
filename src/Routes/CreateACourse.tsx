import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import validate from "@/validation/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

function CreateACourse() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<z.infer<typeof validate.MakeCourseName>>({
    resolver: zodResolver(validate.MakeCourseName),
  });

  async function MakeACourse(values: z.infer<typeof validate.MakeCourseName>) {
    try {
      console.log(values);
    } catch (err) {
      console.log(err);
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
