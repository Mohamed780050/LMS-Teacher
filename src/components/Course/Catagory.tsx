import { Pencil, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { ComboboxDemo } from "../Combobox";

function Catagory() {
  const { catagory } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  const [edit, setEdit] = useState(false);

  return (
    <div className="boder bg-slate-100 rounded-md p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Course Catagory</h2>
        {edit ? (
          <Button variant="ghost" className="cursor-default">
            <X
              className="cursor-pointer duration-200 hover:text-red-700"
              onClick={() => setEdit(false)}
            >
              Cancel
            </X>
          </Button>
        ) : (
          <Button variant="ghost" className="cursor-default">
            <Pencil
              className="hover:text-sky-600 cursor-pointer"
              onClick={() => setEdit(true)}
            />
          </Button>
        )}
      </div>
      {edit ? (
        <div className="space-y-2">
          <ComboboxDemo setEdit={setEdit}/>
        </div>
      ) : (
        <p className="font-medium text-xl flex items-center">
          {catagory[0]?.Icon} {catagory[0]?.Name}
        </p>
      )}
    </div>
  );
}
export default Catagory;
