import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import Axios from "@/config/Axios";
import { Star } from "lucide-react";
import { CourseInfo } from "@/interfaces/interfaces";
import TableSkeleton from "./TableSkeleton";
import { Link } from "react-router-dom";

export default function CourseTable() {
  const key = localStorage.getItem("userInfo");
  const userInfo = key ? JSON.parse(key) : null;
  const { data, isLoading } = useQuery({
    queryKey: [""],
    queryFn: getMyCourses,
  });
  async function getMyCourses() {
    try {
      if (userInfo === null) throw Error("No user id");
      const response = await Axios.get(`/courses/mycourses/${userInfo.id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
  const mycousres: [] | CourseInfo[] = data;
  return (
    <>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <div className="container mx-auto py-10">
          <Table className="border">
            <TableCaption>
              {mycousres.length
                ? "A list of your online courses"
                : "No Courses"}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Course Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Students</TableHead>
                <TableHead className="text-right">Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mycousres.length ? (
                data.map((course: CourseInfo) => (
                  <TableRow key={course.courseName}>
                    <TableCell className="font-medium">
                      <Link to={`editeCourse/${course._id}`}>
                        {course.courseName}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{course.catagory}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {/* {course.students.toLocaleString()} */}
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="inline-flex items-center">
                        {/* {course.rating} */}
                        <Star className="w-4 h-4 text-yellow-400 ml-1" />
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <></>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
}
