import { File, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import Axios from "@/config/Axios";
import { editAttachment } from "@/Redux/editingCourse";

function AttachmentBody({ progressBar }: { progressBar: number }) {
  const { _id, Attachments } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  const dispatch = useDispatch();
  async function handleDelete(id: string) {
    try {
      const response = await Axios.delete(
        `/courses/${_id}/Attachment?AttachmentsID=${id}`
      );
      console.log(response.data);
      dispatch(editAttachment(response.data.Attachments));
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      {Attachments ? (
        <ul className="space-y-1">
          {Attachments.map((attachment, index) => {
            return (
              <li
                key={index * 255.7}
                className="bg-white dark:text-black overflow-hidden relative z-[1] border-sky-200 border text-sky-70 rounded-sm flex items-center p-3 justify-between"
              >
                <span
                  style={{
                    width: `${attachment.completed ? 100 : progressBar}%`,
                  }}
                  className={`absolute h-full block myloader bg-sky-100 -z-[1] left-0`}
                ></span>
                <div className="flex items-center space-x-1">
                  <File />
                  <p className="text-xs sm:text-lg">
                    {attachment?.filename?.length > 25
                      ? `${attachment?.filename?.slice(0, 26)}...`
                      : attachment?.filename}
                  </p>
                </div>
                <Button
                  className="rounded-full"
                  size="icon"
                  variant="destructive"
                  onClick={() => handleDelete(attachment.id)}
                >
                  <Trash2 size={15} />
                </Button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No Attachments</p>
      )}
    </>
  );
}
export default AttachmentBody;
