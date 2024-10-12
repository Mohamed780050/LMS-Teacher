import { Skeleton } from "../ui/skeleton";

function CourseChaptersSkeleton() {
  return (
    <ul>
      {Array.from({ length: 4 }, (_, index) => (
        <li className="mb-1" key={index}>
          <Skeleton className="w-full h-[44px]" />
        </li>
      ))}
    </ul>
  );
}
export default CourseChaptersSkeleton;
