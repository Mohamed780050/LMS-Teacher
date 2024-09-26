import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings, Trash2 } from "lucide-react";
import { ReactNode } from "react";
import { AlertDialogCom } from "../AlertDailogCom";

export function PopoverCom({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          {children}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Course Setting</h4>
            <p className="text-sm text-muted-foreground">
              Controll your course.
            </p>
          </div>
          <div className="grid gap-2">
            <Button className="flex items-center justify-start" variant="ghost">
              <Settings className="mr-2 w-5 h-5" />
              settings
            </Button>
            <AlertDialogCom id={id}>
              <Trash2 className="mr-2 w-5 h-5" />
              Delete
            </AlertDialogCom>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
