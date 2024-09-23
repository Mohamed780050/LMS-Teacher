import { Upload } from "lucide-react";
import { Button } from "./ui/button";
import { ChangeEvent, useRef } from "react";
import Axios from "@/config/Axios";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

function ImageUploader() {
  const { _id } = useSelector((state: RootState) => state.editingCourse.Course);
  const imageFilesInput = useRef<HTMLInputElement>(null);
  async function handleData(e: ChangeEvent<HTMLInputElement>) {
    try {
      if (e.target.files) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = async (e) => {
          await Axios.put(
            `/courses/${_id}`,
            { ImageURL: `${e.target?.result}` },
            {
              onUploadProgress: (e) => console.log(e.progress),
            }
          );
        };
        reader.readAsDataURL(file);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <input
        onChange={handleData}
        ref={imageFilesInput}
        type="file"
        accept="image/*"
        hidden
      />
      <Button variant="ghost" onClick={() => imageFilesInput.current?.click()}>
        <Upload size={30} />
      </Button>
    </>
  );
}
export default ImageUploader;
