import { useSelector } from "react-redux";
import ImageTabs from "../ImageTabs";
import { RootState } from "@/Redux/store";
import { useState } from "react";
import { Button } from "../ui/button";
import { Pencil, X, Image } from "lucide-react";
function ImageSelector() {
  const { ImageURL } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  const [edit, setEdit] = useState(false);
  return (
    <div className="boder bg-slate-100 rounded-md p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Course Image</h2>
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
        <ImageTabs />
      ) : (
        <>
          {ImageURL ? (
            <img src={ImageURL} alt="" />
          ) : (
            <div className="w-full min-h-72 bg-white flex items-center justify-center text-slate-400">
              <Image size={40} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
export default ImageSelector;
