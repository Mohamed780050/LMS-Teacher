import { store } from "@/Redux/store";
import Axios from "./Axios";
import { editCourse } from "@/Redux/editingCourse";

async function getAndSetCourseInfo(id: string) {
  try {
    const response = await Axios.get(`/courses/${id}`);
    store.dispatch(editCourse(response.data));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw Error(err?.message);
  }
}
export default getAndSetCourseInfo;
