"use client";
import { ActionState, FieldErrors } from "@/lib/create-safe-actions";
import { useCallback, useState } from "react";

type Action<TInput, TOutput> = (
  data: TInput
) => Promise<ActionState<TInput, TOutput>>;

interface UseActionOptions<TOutput> {
  onSuccess?: (data: TOutput) => void;
  onError?: (data: string) => void;
  onComplete?: () => void;
}

export const useAction = <TInput, TOutput>(
  actions: Action<TInput, TOutput>,
  options: UseActionOptions<TOutput> = {}
) => {
  const [fielderror, setFielderrors] = useState<
    FieldErrors<TInput> | undefined
  >(undefined);

  const [errors, setErrors] = useState<string | undefined>(undefined);
  const [data, setData] = useState<TOutput | undefined>(undefined);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const execute = useCallback(
    async (input: TInput) => {
      setIsloading(true);
      try {
        const result = await actions(input);
        if (!result) {
          return;
        }
       
          setFielderrors(result.fieldErrors);
       
        if (result.error) {
          setErrors(result.error);
          options.onError?.(result.error);
        }
        if (result.data) {
          setData(result.data);
          options.onSuccess?.(result.data);
        }
      } finally {
        setIsloading(false);
        options.onComplete?.();
      }
    },
    [actions, options]
  );

  return {
    execute,
    errors,
    fielderror,
    data,
    isLoading,
  };
};
