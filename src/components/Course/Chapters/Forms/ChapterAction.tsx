import { Button } from "@/components/ui/button";
import { RootState } from "@/Redux/store";
import { EyeOff, SendHorizonal, Trash } from "lucide-react";
import { useSelector } from "react-redux";
import { AlertDialogForDeletingChapter } from "../AlertDialogForDeletingChapter";
import updateChapterInfo from "@/config/updateChapterInfo";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function ChapterAction() {
  const { isPublished, AuthorId, CourseId, _id, complete, total } = useSelector(
    (state: RootState) => state.Chapter.chapter
  );
  const { loading } = useSelector((state: RootState) => state.global);
  const [isLoading, setisLoading] = useState(false);
  async function handlePublishing() {
    try {
      setisLoading(true);
      await updateChapterInfo(_id, CourseId, AuthorId, {
        isPublished: !isPublished,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setisLoading(false);
    }
  }
  return (
    <div className="flex space-x-2 items-center">
      {loading ? (
        <Skeleton className="w-[107.89px] h-[36px]" />
      ) : (
        <Button
          disabled={isLoading || !(complete === total)}
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
      )}
      {loading ? (
        <Skeleton className="w-[52px] h-[36px]" />
      ) : (
        <AlertDialogForDeletingChapter
          AuthorId={AuthorId}
          CourseId={CourseId}
          chapterId={_id}
        >
          <Button variant="destructive">
            <Trash size={20} />
          </Button>
        </AlertDialogForDeletingChapter>
      )}
    </div>
  );
}
export default ChapterAction;
