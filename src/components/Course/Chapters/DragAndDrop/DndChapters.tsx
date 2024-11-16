import { CourseChapters } from "@/interfaces/interfaces";
import {
  closestCenter,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DndContext,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import Draggable from "./Draggable";
import reOrder from "@/config/reOrder";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

function DndChapters({ chapters }: { chapters: CourseChapters[] }) {
  const [isReording, setIsReording] = useState(false);
  const [mychapters, setMyChapters] = useState(chapters);
  const [active, setActive] = useState<CourseChapters | undefined>(undefined);
  const senors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));
  const { _id } = useSelector((state: RootState) => state.editingCourse.Course);
  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    setActive(chapters.find((item) => item._id === active.id));
  }
  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    const activeItem = mychapters.find((chapter) => chapter._id === active.id);
    const overItem = mychapters.find((chapter) => chapter._id === over.id);
    if (!activeItem || !overItem) return;
    const activeIndex = mychapters.findIndex(
      (chapter) => chapter._id === active.id
    );
    const overIndex = mychapters.findIndex(
      (chapter) => chapter._id === over.id
    );
    if (activeIndex !== overIndex) {
      const updated = arrayMove(mychapters, activeIndex, overIndex).map(
        (chapter, index) => ({ ...chapter, position: 1 + index })
      );
      setMyChapters(updated);
      setIsReording(true);
      await reOrder(
        updated.map((item) => {
          return { id: item._id, position: item.position };
        }),
        _id
      );
      setIsReording(false);
    }
    setActive(undefined);
  }
  function handleDragCancel() {
    setActive(undefined);
  }

  return (
    <div>
      <DndContext
        sensors={senors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
        collisionDetection={closestCenter}
      >
        <SortableContext
          items={mychapters.map((item) => item._id)}
          strategy={verticalListSortingStrategy}
        >
          <ul className="flex flex-col">
            {isReording && (
              <span className="flex items-center justify-center absolute bg-slate-400/50 w-full h-full top-0 left-0 rounded">
                <Loader2
                  size={40}
                  className="text-sky-600 
                animate-spin"
                />
              </span>
            )}
            {mychapters.map((chapter) => (
              <Draggable chapter={chapter} />
            ))}
          </ul>
        </SortableContext>
        {active && (
          <DragOverlay
            adjustScale
            style={{
              transformOrigin: "0 0 ",
            }}
          >
            <Draggable chapter={active} forceDragging={true} />
          </DragOverlay>
        )}
      </DndContext>
    </div>
  );
}
export default DndChapters;
