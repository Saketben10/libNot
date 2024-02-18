"use client";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAction } from "../../../hooks/use-action";
import { CreateBoard } from "../../../actions/create-board";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import FormInput from "./form-input";
import { FormSubmit } from "./form-submit";
import { toast } from "sonner";
import { Formpicker } from "./form-picker";

interface FormPopoverProps {
  sideOffset?: number;
  side?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
  align?: "start" | "center" | "end";
}

export const FormPopover = ({
  children,
  side = "right",
  sideOffset = 0,
  align,
}: FormPopoverProps) => {
  const { execute, fielderror } = useAction(CreateBoard, {
    onSuccess: (data) => {
      console.log({ data });
      toast.success('Board created')
    },
    onError: (error) => {
      console.log({ error });
      toast.error(error)
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        side={side}
        align={align}
        className="w-80 py-3"
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          <form action={onSubmit} className="space-y-4">
            <Formpicker id="title" errors={fielderror} />
            <div className="space-y-4">
              <FormInput
                label="Baord Title"
                id="title"
                placeholder="Enter"
                type="text"
                errors = {fielderror}
              />
            </div>
            <FormSubmit className="bg-gray-200" varient="outline">
              Create
            </FormSubmit>
          </form>
        </div>
        <PopoverClose asChild>
          <Button
            variant="ghost"
            className="absolute h-auto w-auto top-0 right-0 text-neutral-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};
