import Axios from "./Axios";

async function reOrder(
  OrderedChapter: { id: string; position: number }[],
  CourseId: string
) {
  try {
    const userId = JSON.parse(localStorage.getItem("userInfo") || "").id;
    await Axios.put("/chapters/reorder", {
      OrderedArray: OrderedChapter,
      OwnerId: userId,
      CourseId: CourseId,
    });
  } catch (err) {
    console.log(err);
  }
}
export default reOrder;
