import { store } from "@/Redux/store";
import Axios from "./Axios";
import { setChapter } from "@/Redux/Chapter";
import { setLoading } from "@/Redux/globla";

async function getChapterInfo(id: string) {
  try {
    store.dispatch(setLoading(true));
    const response = await Axios.get(`/chapters/${id}`);
    store.dispatch(setChapter(response.data));
    store.dispatch(setLoading(false));
  } catch (err) {
    console.log(err);
  }
}
export default getChapterInfo;
