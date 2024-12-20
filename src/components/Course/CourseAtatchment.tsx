import { useState, useRef, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import generateKey from "@/config/idGenerator";
import AttachmentBody from "./AttachmentBody";
import { addAttachment, editAttachment } from "@/Redux/editingCourse";
import Axios from "@/config/Axios";

export default function CourseAttachment() {
  const [progressBar, setProgressBar] = useState(0);
  const dispatch = useDispatch();
  const { _id } = useSelector((state: RootState) => state.editingCourse.Course);
  const filesInput = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    try {
      const Targets = e.target.files;
      if (Targets) {
        const Files = Array.from(Targets);
        Files.map((file) => {
          const reader = new FileReader();
          // reader.onload = function (e) {
          //   {
          //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          //     Attachments.length
          //       ? dispatch(
          //           editAttachment([
          //             ...Attachments,
          //             {
          //               id: generateKey(),
          //               filename: `${file.name}`,
          //               data: `${e.target?.result}`,
          //               completed: false,
          //             },
          //           ])
          //         )
          //       : dispatch(
          //           editAttachment([
          //             {
          //               id: generateKey(),
          //               filename: `${file.name}`,
          //               data: `${e.target?.result}`,
          //               completed: false,
          //             },
          //           ])
          //         );
          //   }
          // };
          reader.onloadend = async function (e) {
            try {
              dispatch(
                addAttachment({
                  id: "",
                  filename: `${file.name}`,
                  data: "",
                  completed: false,
                })
              );
              const response = await Axios.put(
                `/courses/${_id}/Attachment`,
                {
                  Attachments: {
                    id: generateKey(),
                    filename: `${file.name}`,
                    data: `${e.target?.result}`,
                    completed: false,
                  },
                },
                {
                  onUploadProgress(e) {
                    if (e.progress) setProgressBar(e.progress * 100);
                  },
                }
              );
              const theData = response.data.Attachments;
              console.log(theData);
              dispatch(editAttachment([...theData]));
            } catch (err) {
              console.log(err);
            } finally {
              setProgressBar(0);
            }
          };
          reader.readAsDataURL(file);
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="mt-6 boder dark:bg-slate-600 bg-slate-100 rounded-md p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Course Attachment</h2>
        <Button variant="ghost" onClick={() => filesInput.current?.click()}>
          <PlusCircle />
        </Button>
      </div>
      <div>
        <Input
          type="file"
          ref={filesInput}
          onChange={handleFileChange}
          multiple
          className="hidden"
          accept="application/pdf"
        />
        <AttachmentBody progressBar={progressBar} />
      </div>
    </div>
  );
}
