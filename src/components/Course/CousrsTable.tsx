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
import { Star,Settings } from "lucide-react";
import { CourseInfo } from "@/interfaces/interfaces";
import TableSkeleton from "./TableSkeleton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editCourse } from "@/Redux/editingCourse";
import data from "@/data/data";
import { Button } from "../ui/button";

const CatagoryItmes = data.CatagoryItmes;
export default function CourseTable() {
  const key = localStorage.getItem("userInfo");
  const userInfo = key ? JSON.parse(key) : null;
  const dispatch = useDispatch();
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
          <Table className="border rounded-sm">
            <TableCaption>
              {mycousres.length
                ? "A list of your online courses"
                : "No Courses"}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[230px] border-r">
                  Course Name
                </TableHead>
                <TableHead className="border-r">Category</TableHead>
                <TableHead className="border-r">Students</TableHead>
                <TableHead className="border-r">Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mycousres.length ? (
                data.map((course: CourseInfo) => (
                  <TableRow key={course.courseName}>
                    <TableCell className="font-medium border-r flex items-center justify-between">
                      <Link
                        to={`editeCourse/${course._id}`}
                        onClick={() => dispatch(editCourse(course))}
                      >
                        {course.courseName}
                      </Link>
                      <Button className="flex items-center text-center justify-center" variant="outline" size="icon">
                        <Settings size={17}/>
                      </Button>
                    </TableCell>
                    <TableCell className="border-r">
                      <Badge variant="secondary">
                        {CatagoryItmes.map((item) => {
                          if (item.value === course.catagory) return item.Icon;
                        })}{" "}
                        {course.catagory}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right border-r">
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
