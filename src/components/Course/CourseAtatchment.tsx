import { useState, useRef, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { File } from "lucide-react";
import { PlusCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import generateKey from "@/config/idGenerator";
import AttachmentBody from "./AttachmentBody";
import { editAttachment } from "@/Redux/editingCourse";
import Axios from "@/config/Axios";

export default function CourseAttachment() {
  const [progressBar, setProgressBar] = useState(0);
  const [downloadLink, setDownloadLink] = useState("");
  const dispatch = useDispatch();
  const { _id, Attachments } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  const filesInput = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const Targets = e.target.files;
    if (Targets) {
      const files = Array.from(Targets);
      files.map(async (file) => {
        const reader = new FileReader();
        reader.onload = async function (e) {
          dispatch(
            editAttachment([
              {
                id: generateKey(),
                filename: `${file.name}`,
                data: `${e.target?.result}`,
              },
            ])
          );
          setDownloadLink(`${e.target?.result}`);
        };
        reader.readAsDataURL(file);
      });
      await Axios.put(
        `/courses/${_id}`,
        { Attachments: Attachments },
        {
          onUploadProgress(e) {
            console.log(e.upload);
            if (e.progress) {
              setProgressBar(e.progress * 100);
            }
          },
        }
      );
    }
  }

  async function handleDelete(id: string) {
    console.log(id);
  }

  return (
    <div className="mt-6 boder bg-slate-100 rounded-md p-4 space-y-2">
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
        <span className="w-full h-3 flex relative flex-col bg-slate-600">
          <span className="mt-4 right-0 absolute block">
            {Math.round(progressBar)}%
          </span>
          <span
            style={{ width: `${progressBar}%` }}
            className="bg-sky-600 block h-full"
          ></span>
        </span>
        <a href={downloadLink} download={"pdfFile"}>
          download
        </a>
        <AttachmentBody progressBar={progressBar} />
      </div>
      {/* {edit ? (
        <div>
          <div className="mb-4">
            <Input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              ref={fileInputRef}
              accept="image/*"
              multiple
            />
            <Button onClick={handleAddMore} className="w-full">
              <Plus className="mr-2 h-4 w-4" /> Add Attachment
            </Button>
          </div>
          {attachments.length > 0 && (
            <div className="space-y-4">
              {attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className="border rounded-lg overflow-hidden p-4"
                >
                  <img
                    src={attachment.file}
                    alt={`Attachment ${attachment.id}`}
                    className="w-full h-auto mb-4"
                  />
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => handleEdit(attachment.id)}
                    >
                      <Edit2 className="mr-2 h-4 w-4" /> Edit
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(attachment.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {editingId && (
            <p className="text-sm text-muted-foreground mt-2">
              Select a new file to replace the attachment
            </p>
          )}
        </div>
      ) : (
        <ul>
          {Attachments ? (
            Attachments.map((item) => {
              console.log(item);
              return <p>{item.fileName}</p>;
            })
          ) : (
            <p>Here are the attachments</p>
          )}
        </ul>
      )} */}
    </div>
  );
}
