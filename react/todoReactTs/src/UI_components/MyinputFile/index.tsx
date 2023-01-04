import React, { FC } from "react";

import styles from "./MyinputFile.module.scss";
import { I_TodoState } from "../../components/Todo";

interface I_MyinputFile {
  children: React.ReactNode;
  onChange: (TodoState: I_TodoState, file?: File) => void;
  TodoState: I_TodoState;
}

const MyinputFile: FC<I_MyinputFile> = ({ children, onChange, TodoState }) => {
  return (
    <label className={styles.label}>
      <input
        type="file"
        className={styles.label__input}
        onChange={(e) => {
          onChange(
            TodoState,
            e.target.files !== null ? e.target.files[0] : undefined
          );
        }}
      />
      <span className={styles.label__button}>{children}</span>
    </label>
  );
};

export { MyinputFile };
