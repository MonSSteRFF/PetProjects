import React, { FC } from "react";
import { I_TodoState } from "../../components/Todo";

import styles from "./Myinput.module.scss";
import { I_useSelect } from "../../hooks/useSelect";

interface I_Myselect {
  TodoState: I_TodoState;
  placeholder: string;
  select: I_useSelect;
}

const Myselect: FC<I_Myselect> = ({ TodoState, placeholder, select }) => {
  return (
    <div className={styles.select}>
      <select
        value={select.value}
        onChange={(e) => select.onChange(e.target.value)}
        className={styles.select__wrapper}
      >
        <option
          className={styles.select__wrapper__option}
          value="-1"
          disabled={true}
        >
          {placeholder}
        </option>
        {TodoState.todoGetter()
          .map((item) => {
            return {
              todoListTitle: item.todoListTitle,
              todoListId: item.todoListId,
            };
          })
          .map((option) => {
            return (
              <option
                className={styles.select__wrapper__option}
                key={option.todoListId}
                value={option.todoListId}
              >
                {option.todoListTitle}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export { Myselect };
