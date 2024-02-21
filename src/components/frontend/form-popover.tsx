"use client";
import { useRouter } from "next/navigation";
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
import { ElementRef, useRef } from "react";

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
      
      toast.success('Board created')
      closeBtn.current?.click()
      router.push(`board/${data.id}`)
    },
    onError: (error) => {
      
      toast.error(error)
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const image = formData.get('image')  as string;
    console.log({image ,title});
 

    execute({ title,image });
  };

 const closeBtn = useRef<ElementRef<"button">>(null)
 const router = useRouter()

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        side={side}
        align={align}
        className="w-80 py-3 z"
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          <form action={onSubmit} className="space-y-4">
            <Formpicker id="image" errors={fielderror} />
            <div className="space-y-4">
              <FormInput
                label="Baord Title"
                id="title"
                placeholder="Enter"
                type="text"
                errors = {fielderror}
              />
            </div>
            <FormSubmit className="bg-gray-200 hover:text-white" varient="primary">
              Create
            </FormSubmit>
          </form>
        </div>
        <PopoverClose asChild>
          <Button ref={closeBtn}
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
