import getCourseChapters from "@/config/getCourseChapters";
import { CourseChapters } from "@/interfaces/interfaces";
import { RootState } from "@/Redux/store";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { GripVertical, Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Badge } from "@/components/ui/badge";
import reOrder from "@/config/reOrder";
import CourseChaptersSkeleton from "../CourseChaptersSkeleton";

function Chapters() {
  const { _id, AuthorId } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["", Chapters],
    queryFn: async () => await getCourseChapters(_id, AuthorId),
  });
  const myChapters: CourseChapters[] = data;
  return (
    <div>
      {isLoading ? (
        <CourseChaptersSkeleton />
      ) : (
        <DragDropContext
          onDragEnd={(result: DropResult) => {
            reOrder(result, data, _id, AuthorId, refetch);
          }}
        >
          <Droppable droppableId="chapters">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {myChapters.map((chapter, index) => (
                  <Draggable
                    key={chapter._id}
                    draggableId={chapter._id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className={`mb-1 pr-2 flex items-center justify-between gap-x-2 bg-slate-200 border-slate-200 bordr text-slate-700 rounded-md ${
                          chapter.isPublished
                            ? "bg-sky-300/30 border-sky-200 text-sky-700"
                            : ""
                        }`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <div className="flex gap-x-2 items-center">
                          <div
                            className={` px-2 py-3 border-r border-r-slate-300 hover:bg-slate-300 rounded-l-md transition ${
                              chapter.isPublished &&
                              "border-r-sky-200 hover:bg-slate-200"
                            }`}
                            {...provided.dragHandleProps}
                          >
                            <GripVertical className="h-5 w-5 cursor-grab" />
                          </div>
                          <Link to={`/mycourses/editeChapter/${chapter._id}`}>
                            {chapter.chapterName}
                          </Link>
                        </div>
                        <div className="flex items-center gap-x-1">
                          {chapter.isFree && <Badge>Free</Badge>}
                          <Badge
                            className={`bg-slate-500 ${
                              chapter.isPublished && "bg-sky-700"
                            }`}
                          >
                            {chapter.isPublished ? "Published" : "Draft"}
                          </Badge>
                          <Link to={`/mycourses/editeChapter/${chapter._id}`}>
                            <Pencil className="hover:text-sky-600" size={22} />
                          </Link>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
}
export default Chapters;
