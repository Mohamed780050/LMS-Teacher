import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, MonitorPlay, X } from "lucide-react";
import { useRef, useState } from "react";

function ChapterVideo() {
  const [edit, setEdit] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const theInput = useRef<HTMLInputElement>(null);
  return (
    <div className="mt-6 boder bg-slate-100 rounded-md p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Chapter video</h2>
        {edit ? (
          <Button variant="ghost" className="cursor-default">
            <X
              className="cursor-pointer duration-200 hover:text-red-700"
              onClick={() => setEdit(false)}
            >
              Cancel
            </X>
          </Button>
        ) : (
          <Button variant="ghost" className="cursor-default">
            <Pencil
              className="hover:text-sky-600 cursor-pointer"
              onClick={() => setEdit(true)}
            />
          </Button>
        )}
      </div>
      {edit ? (
        <form className="space-x-2 flex"></form>
      ) : (
        <div className="flex items-center justify-center flex-col w-full min-h-64 bg-white rounded-md">
          <MonitorPlay className="text-slate-400" size={50} />
          <Input ref={theInput}/>
          <Button onClick={() => setVideoLink(`${theInput.current?.value}`)} variant="ghost">Add video</Button>
          {videoLink && (
            <video
              width="560"
              height="315"
              src={videoLink}
              title="Video"
            ></video>
          )}
        </div>
      )}
    </div>
  );
}
export default ChapterVideo;
