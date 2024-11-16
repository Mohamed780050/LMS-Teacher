import { Badge } from "@/components/ui/badge";
import { CourseChapters } from "@/interfaces/interfaces";
import { GripVertical, Pencil } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";

import { Link } from "react-router-dom";
import { CSS } from "@dnd-kit/utilities";

function Draggable({
  chapter,
  forceDragging = false,
}: {
  chapter: CourseChapters;
  forceDragging?: boolean;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
    setActivatorNodeRef,
    transition,
  } = useSortable({
    id: `${chapter._id}`,
  });
  const parentStyles = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
    opacity: isDragging ? "0.4" : "1",
    width: "100%",
  };
  const dragStyle = {
    cursor: isDragging || forceDragging ? "grabbing" : "grab",
  };
  return (
    <button ref={setNodeRef} style={parentStyles}>
      <div
        className={`mb-1 pr-2 flex items-center justify-between gap-x-2 bg-slate-200 border-slate-200 border text-slate-700 rounded-md ${
          chapter.isPublished ? "bg-sky-300/30 border-sky-200 text-sky-700" : ""
        }`}
      >
        <div className="flex gap-x-2 items-center">
          <div
            className={` px-2 py-3 border-r border-r-slate-300 hover:bg-slate-300 rounded-l-md transition ${
              chapter.isPublished && "border-r-sky-200 hover:bg-slate-200"
            }`}
          >
            <span
              ref={setActivatorNodeRef}
              style={dragStyle}
              id={chapter._id}
              {...attributes}
              {...listeners}
            >
              <GripVertical className={`h-5 w-5`} />
            </span>
          </div>
          <Link to={`/mycourses/editeChapter/${chapter._id}`}>
            {chapter.chapterName}
          </Link>
        </div>
        <div className="flex items-center gap-x-1">
          {chapter.isFree && <Badge>Free</Badge>}
          <Badge
            className={`bg-slate-500 ${chapter.isPublished && "bg-sky-700"}`}
          >
            {chapter.isPublished ? "Published" : "Draft"}
          </Badge>
          <Link to={`/mycourses/editeChapter/${chapter._id}`}>
            <Pencil className="hover:text-sky-600" size={22} />
          </Link>
        </div>
      </div>
    </button>
  );
}
export default Draggable;
