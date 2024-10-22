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
import { AlertProps } from "@/interfaces/interfaces";
import { changeReFetcher } from "@/Redux/globla";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function AlertDialogCom({
  children,
  title = "Are you absolutely sure?",
  massage = "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
  okbtn = "Continue",
  id,
}: AlertProps) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  async function handleDelete(id: string) {
    try {
      const response = await Axios.delete(`/courses/mycourses/${id}`);
      dispatch(changeReFetcher());
      toast.success(response.data.message);
      navigate("/mycourses")
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
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
