import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const changeValue = (value) => {
    setValue(value);
  };

  return {
    value,
    onChange: handleChange,
    changeValue: changeValue,
  };
};

export default useInput;
