import Bannar from "@/components/Bannar";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";

function ShowBannar({
  lable = "This chapter is unpublished. It will not be visible in the Course",
}: {
  lable?: string;
}) {
  const { isPublished } = useSelector(
    (state: RootState) => state.Chapter.chapter
  );
  return <>{!isPublished && <Bannar lable={lable} />}</>;
}
export default ShowBannar;
