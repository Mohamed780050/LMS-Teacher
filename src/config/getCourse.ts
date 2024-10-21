import { store } from "@/Redux/store";
import Axios from "./Axios";
import { editCourse } from "@/Redux/editingCourse";
import { QueryClient } from "@tanstack/react-query";
import { setLoading } from "@/Redux/globla";

async function getAndSetCourseInfo(id: string) {
  try {
    const queryClient = new QueryClient();
    const state = store.getState();
    store.dispatch(setLoading(true));
    await queryClient.fetchQuery({
      queryKey: [`${state.global.reFetcher}`],
      queryFn: async () => {
        const response = await Axios.get(`/courses/${id}`);
        store.dispatch(editCourse(response.data));
      },
    });
    store.dispatch(setLoading(false));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw Error(err?.message);
  }
}
export default getAndSetCourseInfo;
