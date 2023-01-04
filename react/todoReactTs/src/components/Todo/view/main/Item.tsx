import React, { FC } from "react";
import { I_TodoItem } from "../../types/main.types";

import styles from "../../styles/index.module.scss";
import { Mybutton } from "../../../../UI_components/Mybutton";
import { I_TodoState } from "../../index";
import { removeTodoInList } from "../../modules/todos.module";

const Item: FC<{ todoItem: I_TodoItem; TodoState: I_TodoState }> = ({
  todoItem,
  TodoState,
}) => {
  const clickHandler = () => {
    removeTodoInList(todoItem.todoItemId, TodoState);
  };

  return (
    <div className={styles.item}>
      <div className={styles.item__title}>
        <p className={styles.item__title__text}>{todoItem.todoItemTitle}</p>
        <Mybutton onClick={clickHandler}>{"Удалить"}</Mybutton>
      </div>
      <div className={styles.item__description}>
        <p>{todoItem.description}</p>
      </div>
    </div>
  );
};

export { Item };
