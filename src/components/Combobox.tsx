import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDispatch, useSelector } from "react-redux";
import { editeCatagory } from "@/Redux/editingCourse";
import { RootState } from "@/Redux/store";
import updateCourseInfo from "@/config/UpdateCourseInfo";
import data from "../data/data";

export function ComboboxDemo({
  setEdit,
}: {
  setEdit: (value: boolean) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const { CatagoryItmes } = data;
  const dispatch = useDispatch();
  const { catagory, _id } = useSelector(
    (state: RootState) => state.editingCourse.Course
  );
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full text-lg py-6 justify-between"
        >
          {catagory
            ? CatagoryItmes.find((framework) => framework.value === catagory)
                ?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {CatagoryItmes.map((catagoryItme) => (
                <CommandItem
                  key={catagoryItme.value}
                  value={catagoryItme.value}
                  onSelect={(currentValue) => {
                    dispatch(editeCatagory(currentValue));
                    updateCourseInfo({
                      id: _id,
                      values: {
                        catagory: currentValue,
                      },
                    });
                    setOpen(false);
                    setEdit(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      catagory === catagoryItme.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />

                  {catagoryItme.Icon}
                  {catagoryItme.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
