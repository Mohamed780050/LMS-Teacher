import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import updateChapterInfo from "@/config/updateChapterInfo";
import { RootState } from "@/Redux/store";
import validate from "@/validation/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil, X } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import z from "zod";

function AcccessSetting() {
  const theSubmitbutton = useRef<HTMLButtonElement | null>(null);
  const { id } = useParams();
  const { isFree, CourseId, AuthorId } = useSelector(
    (state: RootState) => state.Chapter.chapter
  );
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<{ isFree: boolean }>({
    resolver: zodResolver(validate.chapterIsFree),
  });
  const [edit, setEdit] = useState(false);
  async function updateIt(values: z.infer<typeof validate.chapterIsFree>) {
    await updateChapterInfo(`${id}`, CourseId, AuthorId, {
      isFree: !values.isFree,
    });
    setEdit(false);
  }
  return (
    <div className="mt-6 boder bg-slate-100 rounded-md p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Chapter Name</h2>
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
        <form className="space-x-2 flex" onSubmit={handleSubmit(updateIt)}>
          <Input
            type="checkbox"
            onClick={() => theSubmitbutton.current?.click()}
            {...register("isFree")}
            className="w-6 h-6 cursor-pointer"
            disabled={isSubmitting}
            defaultChecked={isFree}
          />
          <p>Make this chapter free</p>
          <Button
            ref={theSubmitbutton}
            className="hidden"
            type="submit"
          ></Button>
        </form>
      ) : (
        <p className="font-medium text-sm">
          {isFree ? "This chapter is free" : "This chapter is not free"}
        </p>
      )}
    </div>
  );
}
export default AcccessSetting;
