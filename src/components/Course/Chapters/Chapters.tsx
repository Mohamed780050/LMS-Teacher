import Loading from "@/components/Loading";
import getCourseChapters from "@/config/getCourseChapters";
import { CourseChapters } from "@/interfaces/interfaces";
import { RootState } from "@/Redux/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { GripVertical } from "lucide-react";
import { Link } from "react-router-dom";

function Chapters() {
  const { _id, AuthorId } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  const { data, isLoading } = useQuery({
    queryKey: ["", Chapters],
    queryFn: () => getCourseChapters(_id, AuthorId),
  });
  const myChapters: CourseChapters[] = data;
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {myChapters.map((chapter) => (
            <li className="flex items-center border bg-white mb-1">
              <GripVertical
                className="mr-1 border p-1 cursor-grab focus-within:cursor-grabbing"
                size={25}
              />
              <Link to={`/mycourses/editeChapter/${chapter._id}`}>
                {chapter.chapterName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Chapters;
