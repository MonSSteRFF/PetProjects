import React, { useState } from "react";

interface I_useInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  manualChange: (str: string) => void;
  error: string;
  errorChange: (str: string) => void;
}

const useInput: (init?: string) => I_useInput = (init) => {
  const [value, setValue] = useState<string>(init !== undefined ? init : "");
  const [error, setError] = useState<string>("");

  const setter: (value: string, error?: string) => void = (value, error) => {
    setError(error !== undefined ? error : "");
    setValue(error !== undefined ? "" : value);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setter(e.target.value);

  return {
    value: value,
    onChange: onChange,
    manualChange: (str) => setter(str),
    error: error,
    errorChange: (str) => setter("", str),
  };
};

export { useInput };
export type { I_useInput };
