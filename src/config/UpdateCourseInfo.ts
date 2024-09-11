import Axios from "./Axios";

async function updateCourseInfo({
  id,
  values,
}: {
  id: string;
  values: { newCourseName: string };
}) {
  try {
    const response = await Axios.put(`/courses/${id}`, values);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
export default updateCourseInfo;
