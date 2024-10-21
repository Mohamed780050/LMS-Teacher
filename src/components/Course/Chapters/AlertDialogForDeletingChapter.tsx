import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Axios from "@/config/Axios";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export function AlertDialogForDeletingChapter({
  children,
  chapterId,
  AuthorId,
  CourseId,
}: {
  children: ReactNode;
  chapterId: string;
  AuthorId: string;
  CourseId: string;
}) {
  const navigate = useNavigate();
  async function deleteTheChapter(
    chapterId: string,
    AuthorId: string,
    CourseId: string
  ) {
    try {
      await Axios.delete(
        `/chapters?chapterId=${chapterId}&AuthorId=${AuthorId}&CourseId=${CourseId}`
      );
      navigate(`/mycourses/editeCourse/${CourseId}`);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            You will Delete this chpater once for all.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => deleteTheChapter(chapterId, AuthorId, CourseId)}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
