import { useState, useCallback } from "react";

type UseFormInput = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
//customHook
export function useFormInput(initialValue: string): UseFormInput {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  return {
    value,
    onChange,
  };
}
