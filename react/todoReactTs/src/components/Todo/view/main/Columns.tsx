import React, { FC } from "react";
import { I_TodoState } from "../../index";

import { List } from "./List";
import styles from "../../styles/index.module.scss";
import { RemoveColumn } from "../logicsBlock/RemoveColumn";

const Columns: FC<{ TodoState: I_TodoState }> = ({ TodoState }) => {
  const ColumnTitle: FC<{ title: string }> = ({ title }) => {
    return (
      <div className={styles.columnTitle}>
        <p className={styles.columnTitle__text}>{title}</p>
      </div>
    );
  };

  const ColumnButtons: FC<{
    TodoState: I_TodoState;
    todoListId: number;
  }> = ({ TodoState, todoListId }) => {
    return (
      <div>
        <RemoveColumn TodoState={TodoState} todoListId={todoListId} />
      </div>
    );
  };

  return (
    <div className={styles.columns}>
      {TodoState.todoGetter().map((todoColumn) => (
        <div
          key={todoColumn.todoListId}
          className={styles.column}
          style={{ width: `${100 / TodoState.todoGetter().length}%` }}
        >
          <ColumnTitle title={todoColumn.todoListTitle} />

          <div className={styles.column__wrapper}>
            <List TodoState={TodoState} list={todoColumn.todoItems} />
            <ColumnButtons
              TodoState={TodoState}
              todoListId={todoColumn.todoListId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export { Columns };
