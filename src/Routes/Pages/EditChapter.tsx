import ChapterTitle from "@/components/Course/Chapters/ChapterTitle";
import CustomizeChatper from "@/components/Course/Chapters/CustomizeChatper";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getChapterInfo from "@/config/getChapterInfo";

function EditChapter() {
  const { id } = useParams();
  const { _id } = useSelector((state: RootState) => state.Chapter.chapter);
  if (!_id) {
    (async () => await getChapterInfo(`${id}`))();
  }
  return (
    <div>
      <ChapterTitle />
      <CustomizeChatper />
    </div>
  );
}
export default EditChapter;
