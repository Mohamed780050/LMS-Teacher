import CourseBannar from "@/components/Course/CourseBannar";
import CourseTitle from "@/components/Course/CourseTitle";
import CustomizeCourse from "@/components/Course/CustomizeCourse";

function EditeCourse() {
  return (
    <>
      <CourseBannar />
      <div className="p-6">
        <CourseTitle />
        <CustomizeCourse />
      </div>
    </>
  );
}
export default EditeCourse;
