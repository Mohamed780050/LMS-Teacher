import { editAttachment, editCourse } from "@/Redux/editingCourse";
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
      | { id: string; filename: string; data: string }[];
  };
}) {
  try {
    if (Object.getOwnPropertyNames(values).includes("Attachments")) {
      store.dispatch(editAttachment([values].flat()));
      await Axios.put(`/courses/${id}`, values);
    } else {
      const response = await Axios.put(`/courses/${id}`, values);
      store.dispatch(editCourse(response.data));
    }
  } catch (err) {
    console.error(err);
  }
}
export default updateCourseInfo;
