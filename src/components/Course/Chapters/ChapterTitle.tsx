import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import ChapterAction from "./Forms/ChapterAction";

function ChapterTitle() {
  const { total, complete } = useSelector(
    (state: RootState) => state.Chapter.chapter
  );
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-2">
        <h2 className="text-2xl font-medium">Chapter setup</h2>
        <p className="text-sm text-slate-700">
          Complete all fields ({complete} / {total})
        </p>
      </div>
      <ChapterAction />
    </div>
  );
}
export default ChapterTitle;
