import {
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ReactNode } from "react";

function SortableItem({ position,children }: { position: number; children: ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: position });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "16px",
    border: "1px solid #ccc",
    marginBottom: "8px",
    backgroundColor: "#f9f9f9",
    cursor: "grab",
  };
  return (
    <div>
      {children}
    </div>
  );
}
export default SortableItem;
