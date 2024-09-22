import { editCourse } from "@/Redux/editingCourse";
import Axios from "./Axios";
import { store } from "@/Redux/store";
async function updateCourseInfo({
  id,
  values,
}: {
  id: string | undefined;
  values: {
    [key: string]:
      | string
      | number
      | []
      | string[]
      | number[]
      | { filename: string; data: string }[];
  };
}) {
  try {
    const response = await Axios.put(`/courses/${id}`, values);
    store.dispatch(editCourse(response.data));
  } catch (err) {
    console.error(err);
  }
}
export default updateCourseInfo;
