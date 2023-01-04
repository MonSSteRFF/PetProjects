import React, { useState } from "react";

const useCheckbox = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = () => {
    setValue(!value);
    console.log(value);
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

export default useCheckbox;
