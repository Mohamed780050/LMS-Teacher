import { Upload } from "lucide-react";
import { Button } from "./ui/button";
import { ChangeEvent, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import updateCourseInfo from "@/config/UpdateCourseInfo";
import Loading from "./Loading";

function ImageUploader({ setEdit }: { setEdit: (v: boolean) => void }) {
  const [isLoading, setIsLoading] = useState(false);
  const { _id } = useSelector((state: RootState) => state.editingCourse.Course);
  const imageFilesInput = useRef<HTMLInputElement>(null);
  async function handleData(e: ChangeEvent<HTMLInputElement>) {
    try {
      if (e.target.files) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = async (e) => {
          setIsLoading(true);
          await updateCourseInfo({
            id: _id,
            values: { ImageURL: `${e.target?.result}` },
          });
          setEdit(false);
          setIsLoading(false);
        };
        reader.readAsDataURL(file);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <input
        onChange={handleData}
        ref={imageFilesInput}
        type="file"
        accept="image/*"
        hidden
      />
      {isLoading ? <Loading /> : <span hidden></span>}
      <Button variant="ghost" onClick={() => imageFilesInput.current?.click()}>
        <Upload size={30} />
      </Button>
    </div>
  );
}
export default ImageUploader;
