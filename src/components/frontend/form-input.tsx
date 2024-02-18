"use client";
import { useFormStatus } from "react-dom";
 
 
import { Input } from "../ui/input";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import FormErrors from "./form-erros";

interface Formprops {
  id: string;
  label?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  errors?: Record<string, string[] | undefined>;
  onBlur?: () => void;
  className?: string;
  defaultValue?: string;
}

const FormInput = forwardRef<HTMLInputElement, Formprops>(
  (
    {
      id,
      label,
      type,
      disabled,
      placeholder,
      errors,
      onBlur,
      className,
      defaultValue,
    },
    ref
  ) => {
    const { pending } = useFormStatus();
    return (
      <div className="space-y-2">
        <div className="space-y-1">
          {label ? (
            <label
              htmlFor={id}
              className="text-xs font-semibold text-neutral-700"
            >
              {label}
            </label>
          ) : null}
        </div>
        <Input
          onBlur={onBlur}
          defaultValue={defaultValue}
          ref={ref}
          name={id}
          id={id}
          placeholder={placeholder}
          type={type}
          disabled={pending || disabled}
          className={cn("text-sm px-2 py-2 h-7 ", className)}
          aria-describedby={`${id}-error`}
        />
        <FormErrors id={id} errors={errors} />
      </div>
    );
  }
);

export default FormInput;
FormInput.displayName = "FormInput";
