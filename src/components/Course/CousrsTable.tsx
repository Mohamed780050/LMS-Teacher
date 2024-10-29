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
import { Star, Settings } from "lucide-react";
import { CourseInfo } from "@/interfaces/interfaces";
import TableSkeleton from "./TableSkeleton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCourse } from "@/Redux/editingCourse";
import data from "@/data/data";
import { PopoverCom } from "./DrobCourseSetting";
import { RootState } from "@/Redux/store";
import { setTotal } from "@/Redux/pagenator";
import { setLoading } from "@/Redux/globla";

const CatagoryItmes = data.CatagoryItmes;
export default function CourseTable() {
  const { reFetcher } = useSelector((state: RootState) => state.global);
  const key = localStorage.getItem("userInfo");
  const userInfo = key ? JSON.parse(key) : null;
  const dispatch = useDispatch();
  const { pageSize, pageCounter } = useSelector(
    (state: RootState) => state.pagenator
  );
  const { data, isLoading } = useQuery({
    queryKey: [`${reFetcher}`, `${pageCounter}`, `${pageSize}`],
    queryFn: getMyCourses,
  });
  async function getMyCourses() {
    try {
      dispatch(setLoading(true));
      if (userInfo === null) throw Error("No user id");
      const response = await Axios.get(
        `/courses/mycourses/${userInfo.id}?pageSize=${pageSize}&pageCount=${pageCounter}`
      );
      dispatch(setTotal(response.data.total));
      return response.data.courses;
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  }
  const mycousres: [] | CourseInfo[] = data;
  return (
    <>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <div className=" mx-auto py-5">
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
                <TableHead className="border-r">Pricing</TableHead>
                <TableHead className="border-r">isPublished</TableHead>
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
                      <PopoverCom id={course._id}>
                        <Settings size={17} />
                      </PopoverCom>
                    </TableCell>
                    <TableCell className="border-r">
                      {course.catagory ? (
                        <Badge variant="secondary">
                          {CatagoryItmes.map((item) => {
                            if (item.value === course.catagory)
                              return item.Icon;
                          })}
                          {course.catagory}
                        </Badge>
                      ) : (
                        <p className="text-sm italic text-slate-500">
                          No Catagory
                        </p>
                      )}
                    </TableCell>
                    <TableCell className="border-r">
                      {course.price ? (
                        `$${course.price}`
                      ) : (
                        <p className="text-sm italic text-slate-500">
                          No Price
                        </p>
                      )}
                    </TableCell>
                    <TableCell className="border-r">
                      {course.IsPublished ? (
                        <Badge className="bg-sky-700 hover:bg-sky-800 transition">
                          Published
                        </Badge>
                      ) : (
                        <Badge>Draft</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-left border-r">
                      {course.students.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-left">
                      <span className="inline-flex items-center">
                        {parseFloat(`${course.rating}`)}
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
