import Bannar from "@/components/Bannar";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";

function CourseBannar({
  lable = "This course is unpublished. It will not be visible to the students",
}: {
  lable?: string;
}) {
  const { IsPublished } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  return <>{!IsPublished && <Bannar lable={lable} />}</>;
}
export default CourseBannar;
