import { Button } from "@/components/ui/button";
import { RootState } from "@/Redux/store";
import { EyeOff, SendHorizonal, Trash } from "lucide-react";
import { useSelector } from "react-redux";
import { AlertDialogForDeletingChapter } from "../AlertDialogForDeletingChapter";
import updateChapterInfo from "@/config/updateChapterInfo";
import { useState } from "react";

function ChapterAction() {
  const { isPublished, AuthorId, CourseId, _id, complete, total } = useSelector(
    (state: RootState) => state.Chapter.chapter
  );
  const [loading, setLoading] = useState(false);
  async function handlePublishing() {
    try {
      setLoading(true);
      await updateChapterInfo(_id, CourseId, AuthorId, {
        isPublished: !isPublished,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex space-x-2 items-center">
      <Button
        disabled={loading || !(complete === total)}
        onClick={() => handlePublishing()}
        className="items-center space-x-2"
        variant="outline"
      >
        {isPublished ? (
          <>
            <p>Unpublish</p>
            <EyeOff size={20} />
          </>
        ) : (
          <>
            <p>Publish</p>
            <SendHorizonal size={20} />
          </>
        )}
      </Button>
      <AlertDialogForDeletingChapter
        AuthorId={AuthorId}
        CourseId={CourseId}
        chapterId={_id}
      >
        <Button variant="destructive">
          <Trash size={20} />
        </Button>
      </AlertDialogForDeletingChapter>
    </div>
  );
}
export default ChapterAction;
