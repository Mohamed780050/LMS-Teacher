import getCourseChapters from "@/config/getCourseChapters";
import { RootState } from "@/Redux/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import CourseChaptersSkeleton from "./CourseChaptersSkeleton";
import DndChapters from "./Chapters/DragAndDrop/DndChapters";

function Chapters() {
  const { _id, AuthorId } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  const { data, isLoading } = useQuery({
    queryKey: ["", Chapters],
    queryFn: async () => await getCourseChapters(_id, AuthorId),
  });
  return (
    <div>
      {isLoading ? <CourseChaptersSkeleton /> : <DndChapters chapters={data} />}
    </div>
  );
}
export default Chapters;
