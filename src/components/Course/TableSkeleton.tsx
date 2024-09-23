import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";
function TableSkeleton() {
  return (
    <Table className="border rounded-sm">
      <TableCaption>A list of popular online courses</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Course Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Students</TableHead>
          <TableHead className="text-right">Rating</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 6 }, (_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton className="w-full h-3" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-full h-3" />
            </TableCell>
            <TableCell className="text-right">
              <Skeleton className="w-full h-3" />
            </TableCell>
            <TableCell className="text-right">
              <Skeleton className="w-full h-3" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
export default TableSkeleton;
