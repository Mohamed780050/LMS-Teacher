import { File, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import updateCourseInfo from "@/config/UpdateCourseInfo";

function AttachmentBody({ progressBar }: { progressBar: number }) {
  const { _id, Attachments } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  async function handleDelete(id: string) {
    const filteredAttachment = Attachments.filter((item) => item.id !== id);
    await updateCourseInfo({
      id: _id,
      values: { Attachments: filteredAttachment },
    });
  }
  return (
    <>
      {Attachments ? (
        <ul className="space-y-1">
          {Attachments.map((attachment, index) => {
            console.log(Attachments);
            return (
              <li
                key={index * 255.7}
                className="bg-white overflow-hidden relative z-[1] border-sky-200 border text-sky-70 rounded-sm flex items-center p-3 justify-between"
              >
                <span
                  style={{ width: `${progressBar}%` }}
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
                  variant="destructive"
                  onClick={() => handleDelete(attachment.id)}
                >
                  <Trash2 size={20} /> Delete
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
