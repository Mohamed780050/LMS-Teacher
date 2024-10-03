import ChapterTitleFrom from "./Forms/ChapterTitleFrom";

function CustomizeChatper() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        <div className="space-y-6">
          <div className="flex items-center space-x-1">
            {/* <IconBage icon={LayoutDashboard} /> */}
            <h2 className="text-xl">Customize your course</h2>
          </div>
          <ChapterTitleFrom/>
          {/* <TitleForm />
          <DescriptionForm />
          <ImageSelector />
          <Catagory /> */}
        </div>
        <div className="space-y-6">
          {/* Course Chapter */}
          <div className="flex items-center space-x-1">
            {/* <IconBage icon={ListChecks} /> */}
            <h2 className="text-xl">Course chapters</h2>
          </div>
          {/* <CourseChatpers /> */}
          {/* Course Resourses and Attachment */}
          <div className="flex items-center space-x-1">
            {/* <IconBage icon={File} /> */}
            <h2 className="text-xl">Course Resourses</h2>
          </div>
          {/* <CourseAttachment /> */}
        </div>
      </div>
    </>
  );
}
export default CustomizeChatper;
