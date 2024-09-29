import Axios from "./Axios";

async function getCourseChapters(CourseId: string, AuthorId: string) {
  try {
    console.log(`?CourseId=${CourseId}&AuthorId=${AuthorId}`);
    const response = await Axios.get(
      `/chapters/?CourseId=${CourseId}&AuthorId=${AuthorId}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
export default getCourseChapters;
