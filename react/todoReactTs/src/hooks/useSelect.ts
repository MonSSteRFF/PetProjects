import { useState } from "react";

interface I_useSelect {
  value: string;
  onChange: (str: string) => void;
}

const useSelect: () => I_useSelect = () => {
  const [value, setValue] = useState<string>("-1");

  const changeSelect = (str: string) => {
    setValue(str);
  };

  return { value: value, onChange: changeSelect };
};

export { useSelect };
export type { I_useSelect };
