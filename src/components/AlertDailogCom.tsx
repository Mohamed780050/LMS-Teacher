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
import { Button } from "@/components/ui/button";
import Axios from "@/config/Axios";
import { AlertProps } from "@/interfaces/interfaces";
import { changeReFetcher } from "@/Redux/globla";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export function AlertDialogCom({
  children,
  title = "Are you absolutely sure?",
  massage = "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
  okbtn = "Continue",
  id,
}: AlertProps) {
  const dispatch = useDispatch();
  async function handleDelete(id: string) {
    try {
      const response = await Axios.delete(`/courses/mycourses/${id}`);
      console.log(response);
      dispatch(changeReFetcher());
      toast.success(response.data.message);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="flex items-center justify-start hover:bg-red-600 hover:text-white"
          variant="ghost"
        >
          {children}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{massage}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(id)}>
            {okbtn}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
