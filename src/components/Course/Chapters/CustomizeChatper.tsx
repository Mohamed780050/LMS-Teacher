import { Eye, Video } from "lucide-react";
import ChapterDescriptionForm from "./Forms/ChapterDescriptionForm";
import ChapterTitleFrom from "./Forms/ChapterTitleFrom";
import IconBage from "@/components/IconBadge";
import AcccessSetting from "./Forms/AcccessSetting";
import ChapterVideo from "./Forms/ChapterVideo";

function CustomizeChatper() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        <div className="space-y-6">
          <div className="flex items-center space-x-1">
            {/* <IconBage icon={LayoutDashboard} /> */}
            <h2 className="text-xl">Customize your course</h2>
          </div>
          <ChapterTitleFrom />
          <ChapterDescriptionForm />
          {/* <TitleForm />
          <DescriptionForm />
          <ImageSelector />
          <Catagory /> */}
        </div>
        <div className="space-y-6">
          {/* Chapter Access */}
          <div className="flex items-center space-x-1">
            <IconBage icon={Eye} />
            <h2 className="text-xl">Chapters Access</h2>
          </div>
          <AcccessSetting />
          {/* Course Resourses and Attachment */}
          <div className="flex items-center space-x-1">
            <IconBage icon={Video} />
            <h2 className="text-xl">Chapter Video</h2>
          </div>
          <ChapterVideo />
        </div>
      </div>
    </>
  );
}
export default CustomizeChatper;
