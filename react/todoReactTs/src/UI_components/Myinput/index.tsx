import React, { FC } from "react";
import { I_useInput } from "../../hooks/useInput";

import styles from "./Myinput.module.scss";

const Myinput: FC<{
  input: I_useInput;
  placeholder?: string;
}> = ({ input, placeholder }) => {
  return (
    <label className={styles.label}>
      <input
        className={`${styles.input}${
          input.value !== "" ? " " + styles.active : ""
        }`}
        type="text"
        value={input.value}
        onChange={(e) => input.onChange(e)}
      />

      {placeholder !== undefined ? (
        <span className={styles.placeholder}>{placeholder}</span>
      ) : null}

      <span className={styles.error}>{input.error}</span>
    </label>
  );
};

export { Myinput };
