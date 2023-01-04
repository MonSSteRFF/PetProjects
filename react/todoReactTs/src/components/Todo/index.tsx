import React, { FC, useState } from "react";
import { I_TodoColumn } from "./types/main.types";

import styles from "./styles/index.module.scss";

import { Columns } from "./view/main/Columns";
import { AddColumn } from "./view/logicsBlock/AddColumn";
import { AddTodoItem } from "./view/logicsBlock/AddTodoItem";
import { ImportExport } from "./view/logicsBlock/ImportExport";

interface I_TodoState {
  todoGetter: () => I_TodoColumn[];
  todoSetter: (newTodoColumns: I_TodoColumn[]) => void;
}

const Todo: FC = () => {
  const todoTemp = localStorage.getItem("TodoLists");

  const [todoColumns, setTodoColumns] = useState<I_TodoColumn[]>(
    todoTemp !== null ? JSON.parse(todoTemp) : []
  );

  const TodoState: I_TodoState = {
    todoGetter: () => {
      return JSON.parse(JSON.stringify(todoColumns));
    },
    todoSetter: (newTodoColumns) => {
      localStorage.setItem("TodoLists", JSON.stringify(newTodoColumns));

      setTodoColumns(newTodoColumns);
    },
  };

  return (
    <div className={styles.todo}>
      <p className={styles.todo__title}>{"Мой первый todo лист"}</p>

      <Columns TodoState={TodoState} />

      <AddColumn TodoState={TodoState} />

      <AddTodoItem TodoState={TodoState} />

      <ImportExport TodoState={TodoState} />
    </div>
  );
};

export { Todo };
export type { I_TodoState };
