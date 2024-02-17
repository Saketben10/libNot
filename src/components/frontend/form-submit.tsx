"use client";

import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

interface FormSubmitprops {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  varient?:
  "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary"  
}

export const FormSubmit = ({
  children,
  disabled,
  className,
  varient,
}: FormSubmitprops) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending || disabled} className={cn(className)} variant={varient}  >
      {children}
    </Button>
  );
};
