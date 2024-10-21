import { store } from "@/Redux/store";
import Axios from "./Axios";
import { setChapter } from "@/Redux/Chapter";

async function updateChapterInfo(
  id: string,
  CourseId: string,
  AuthorId: string,
  values: {
    [key: string]: unknown;
  }
) {
  try {
    const response = await Axios.put(`/chapters/`, {
      CourseId: CourseId,
      AuthorId: AuthorId,
      ChapterId: id,
      ...values,
    });
    console.log(response);
    store.dispatch(setChapter(response.data));
  } catch (err) {
    console.log(err);
  }
}
export default updateChapterInfo;
