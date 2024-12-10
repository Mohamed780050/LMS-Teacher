import { RootState } from "@/Redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "../../ui/button";
import { PlusCircle, X } from "lucide-react";
import { Input } from "../../ui/input";
import validate from "@/validation/validate";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Spiner from "../../Spiner";
import Axios from "@/config/Axios";
import { changeReFetcher } from "@/Redux/globla";
import Chapters from "../Chapters";

function CourseChatpers() {
  const key = localStorage.getItem("userInfo");
  const userInfo = key ? JSON.parse(key) : null;
  const { id } = useParams();
  const dispatch = useDispatch();
  const { chapters } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  const [edit, setEdit] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<{ chapterName: string }>({
    resolver: zodResolver(validate.chapterName),
  });
  async function addChapterToCourse(
    values: z.infer<typeof validate.chapterName>
  ) {
    const response = await Axios.post(`/chapters/`, {
      CourseId: id,
      AuthorId: userInfo.id,
      ...values,
    });
    dispatch(changeReFetcher());
    console.log(response);
    setEdit(false);
  }
  return (
    <div className="mt-6 boder dark:bg-slate-600 bg-slate-100 rounded-md p-4 space-y-2 relative">
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
            <PlusCircle
              className="hover:text-sky-600 cursor-pointer duration-150"
              onClick={() => setEdit(true)}
            />
          </Button>
        )}
      </div>
      {edit ? (
        <form className="space-y-2" onSubmit={handleSubmit(addChapterToCourse)}>
          <Input
            {...register("chapterName")}
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
          {chapters?.length ? (
            <Chapters />
          ) : (
            <p className="font-medium text-sm text-slate-500 italic">
              No Chapters
            </p>
          )}
        </>
      )}
      <p className="font-medium text-sm text-slate-500">
        Drag and drop to reorder your chapters
      </p>
    </div>
  );
}
export default CourseChatpers;
