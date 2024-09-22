import { useState, useRef, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { File, Pencil, X } from "lucide-react";
import { Trash2, PlusCircle } from "lucide-react";
import updateCourseInfo from "@/config/UpdateCourseInfo";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

export default function CourseAttachment() {
  const [progressBar, setProgressBar] = useState(0);
  const [downloadLink, setDownloadLink] = useState("");
  const { _id, Attachments } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  const filesInput = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const Targets = e.target.files;
    if (Targets) {
      const files = Array.from(Targets);
      files.map((file) => {
        const reader = new FileReader();
        reader.onload = async function (e) {
          await updateCourseInfo({
            id: _id,
            values: {
              Attachments: [
                { filename: `${file.name}`, data: `${e.target?.result}` },
              ],
            },
          });
          setDownloadLink(`${e.target?.result}`);
          console.log(Attachments);
        };
        reader.onprogress = function (e) {
          if (e.lengthComputable) {
            const persent = (e.loaded / e.total) * 100;
            setProgressBar(persent);
          }
        };
        reader.onloadend = function () {
          setProgressBar(100);
        };
        reader.readAsDataURL(file);
      });
    }
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
        {Attachments ? (
          <ul>
            {Attachments.map((attachment, index) => (
              <li
                key={index * 255.7}
                className="bg-sky-100 border-sky-200 border text-sky-700 rounded-sm flex items-center p-3 justify-between"
              >
                <div className="flex items-center space-x-1">
                  <File />
                  <p className="text-xs sm:text-lg">
                    {attachment.filename.length > 25
                      ? `${attachment.filename.slice(0, 26)}...`
                      : attachment.filename}
                  </p>
                </div>
                <Button variant="destructive">
                  <Trash2 size={20} /> Delete
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Attachments</p>
        )}
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
