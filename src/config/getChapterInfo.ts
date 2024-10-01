import { store } from "@/Redux/store";
import Axios from "./Axios";
import { setChapter } from "@/Redux/Chapter";

async function getChapterInfo(id: string) {
  try {
    const response = await Axios.get(`/chapters/${id}`);
    store.dispatch(setChapter(response.data))
  } catch (err) {
    console.log(err);
  }
}
export default getChapterInfo;
