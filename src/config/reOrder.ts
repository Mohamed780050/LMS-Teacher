import { CourseChapters } from "@/interfaces/interfaces";
import { DropResult } from "@hello-pangea/dnd";
import Axios from "./Axios";
import { store } from "@/Redux/store";
import { editChapters } from "@/Redux/editingCourse";

async function reOrder(
  result: DropResult,
  OrignalArray: CourseChapters[],
  _id: string,
  AuthorId: string,
  refetch: () => void
) {
  try {
    if (result.destination === null) return;
    const destinationInfo = OrignalArray.filter((item, index) => {
      if (index === result.destination?.index) return item;
    });
    if (result.draggableId === destinationInfo[0]._id) return;
    await Axios.put("/chapters/reorder", {
      MovingChaptrId: result.draggableId,
      MovingChaptrPostion: result.source.index + 1,
      destinationId: destinationInfo[0]._id,
      destinationPosition: destinationInfo[0].position + 1,
      CourseId: _id,
      AuthorId: AuthorId,
    });
    refetch();
  } catch (err) {
    console.log(err);
  }
}
export default reOrder;
