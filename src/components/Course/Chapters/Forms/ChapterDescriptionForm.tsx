import Spiner from "@/components/Spiner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import updateChapterInfo from "@/config/updateChapterInfo";
import { RootState } from "@/Redux/store";
import validate from "@/validation/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import z from "zod";

function ChapterDescriptionForm() {
  const { id } = useParams();
  const { description, CourseId, AuthorId } = useSelector(
    (state: RootState) => state.Chapter.chapter
  );
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<{ newChapterDescription: string }>({
    resolver: zodResolver(validate.chapterDescriptionUpdate),
  });
  const [edit, setEdit] = useState(false);
  async function updateIt(
    values: z.infer<typeof validate.chapterDescriptionUpdate>
  ) {
    await updateChapterInfo(`${id}`, CourseId, AuthorId, values);
    setEdit(false);
  }
  return (
    <div className="mt-6 boder bg-slate-100 rounded-md p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Chapter Descrition</h2>
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
          <Textarea
            {...register("newChapterDescription")}
            defaultValue={description}
            className="rounded-none bg-white"
            disabled={isSubmitting}
          />
          <div className="space-x-2">
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? <Spiner size={18} /> : "save"}
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
        <>
          {description ? (
            <p className="font-medium text-sm">{description}</p>
          ) : (
            <p className="font-medium text-sm text-slate-500 italic">
              No description
            </p>
          )}
        </>
      )}
    </div>
  );
}
export default ChapterDescriptionForm;
