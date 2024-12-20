import ChapterTitle from "@/components/Course/Chapters/ChapterTitle";
import CustomizeChatper from "@/components/Course/Chapters/CustomizeChatper";
import { useParams } from "react-router-dom";
import getChapterInfo from "@/config/getChapterInfo";
import BackToCouse from "@/components/Course/Chapters/BackToCouse";
import { useEffect } from "react";
import ShowBannar from "@/components/Course/Chapters/ShowBannar";

function EditChapter() {
  const { id } = useParams();
  useEffect(() => {
    (async () => await getChapterInfo(`${id}`))();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <ShowBannar />
      <div className="p-6">
        <BackToCouse />
        <ChapterTitle />
        <CustomizeChatper />
      </div>
    </>
  );
}
export default EditChapter;
