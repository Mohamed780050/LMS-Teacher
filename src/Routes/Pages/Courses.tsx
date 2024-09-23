import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div className="p-6">
      <Link to="createACourse">
        <Button variant="ghost">
          New Course <PlusCircle size={20} className="ml-1" />
        </Button>
      </Link>
    </div>
  );
}
export default Courses;
