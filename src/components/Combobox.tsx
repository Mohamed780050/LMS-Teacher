import * as React from "react";
import { Check, ChevronsUpDown, Icon } from "lucide-react";
import {
  HandCoins,
  Cpu,
  BicepsFlexed,
  Camera,
  PencilRuler,
} from "lucide-react";
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

const frameworks = [
  {
    Icon: React.createElement(HandCoins, { size: 20, className: "mr-1" }),
    value: "Accounting",
    label: "Accounting",
  },
  {
    Icon: React.createElement(Cpu, { size: 20, className: "mr-1" }),
    value: "Computer Science",
    label: "Computer Science",
  },
  {
    Icon: React.createElement(BicepsFlexed, { size: 20, className: "mr-1" }),
    value: "Fitness",
    label: "Fitness",
  },
  {
    Icon: React.createElement(Camera, { size: 20, className: "mr-1" }),
    value: "Photography",
    label: "Photography",
  },
  {
    Icon: React.createElement(PencilRuler, { size: 20, className: "mr-1" }),
    value: "Engineering",
    label: "Engineering",
  },
];

export function ComboboxDemo({
  setEdit,
}: {
  setEdit: (value: boolean) => void;
}) {
  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState("");
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
          {catagory[0].Name
            ? frameworks.find(
                (framework) => framework.value === catagory[0]?.Name
              )?.label
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
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    dispatch(
                      editeCatagory([
                        { Icon: framework.Icon, Name: currentValue },
                      ])
                    );
                    setOpen(false);
                    setEdit(false);
                    updateCourseInfo({
                      id: _id,
                      values: {
                        Icon: framework.Icon,
                        Name: framework.value,
                      },
                    });
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      catagory[0]?.Name === framework.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />

                  {framework.Icon}
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
