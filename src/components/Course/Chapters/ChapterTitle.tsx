import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import ChapterAction from "./Forms/ChapterAction";
import { Skeleton } from "@/components/ui/skeleton";

function ChapterTitle() {
  const { total, complete } = useSelector(
    (state: RootState) => state.Chapter.chapter
  );
  const { loading } = useSelector((state: RootState) => state.global);
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-2">
        <h2 className="text-2xl font-medium">Chapter setup</h2>
        {loading ? (
          <Skeleton className="w-[154.7px] h-[20px]" />
        ) : (
          <p className="text-sm text-slate-700">
            Complete all fields ({complete} / {total})
          </p>
        )}
      </div>
      <ChapterAction />
    </div>
  );
}
export default ChapterTitle;
