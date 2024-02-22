"use client";
import { ElementRef, useRef, useState } from "react";
import FormInput from "@/components/frontend/form-input";
import { Button } from "@/components/ui/button";
import { board } from "@prisma/client";

interface Boardtitleformprops {
  data: board;
}
export const BoardTitleForm = ({ data }: Boardtitleformprops) => {
  const [isEditing, setIsediting] = useState(false);
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const enableisEditing = () => {
    setIsediting(true);

    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    console.log("form has been submiiteed", title);
  };
  const onBlur = ()=>{
   formRef.current?.requestSubmit();
  }

  if (isEditing) {
    return (
      <form action={onSubmit} ref={formRef} className="flex items-center gap-x-2">
        <FormInput 
          ref={inputRef}
          id="title"
          onBlur={ onBlur}
          defaultValue={data.title}
          className="text-large font-bold px-[7px] py-1 h-7 bg-transparent  focus-visible:outline-none focus-visible:ring-transparent border-white rounded-md"
        />
      </form>
    );
  }

  return (
    <div>
      <Button variant={"transparent"} onClick={enableisEditing}>
        {data.title}
      </Button>
    </div>
  );
};
