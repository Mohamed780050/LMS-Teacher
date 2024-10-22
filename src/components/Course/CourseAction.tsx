import { RootState } from "@/Redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { EyeOff, SendHorizonal, Trash } from "lucide-react";
import { AlertDialogCom } from "../AlertDailogCom";

function CourseAction() {
  const { IsPublished, total, completed, _id } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  const { loading } = useSelector((state: RootState) => state.global);
  const [isLoading, setisLoading] = useState(false);
  async function handlePublishing() {
    try {
      setisLoading(true);
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
          disabled={isLoading || !(completed === total)}
          onClick={() => handlePublishing()}
          className="items-center space-x-2"
          variant="outline"
        >
          {IsPublished ? (
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
        <AlertDialogCom id={_id}>
          <Button variant="destructive">
            <Trash size={20} />
          </Button>
        </AlertDialogCom>
      )}
    </div>
  );
}
export default CourseAction;
