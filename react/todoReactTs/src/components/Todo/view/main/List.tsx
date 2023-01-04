import React, { FC } from "react";
import { I_TodoItem } from "../../types/main.types";

import { Item } from "./Item";

import styles from "../../styles/index.module.scss";
import { I_TodoState } from "../../index";

const List: FC<{
  list?: I_TodoItem[];
  TodoState: I_TodoState;
}> = ({ list, TodoState }) => {
  return (
    <div className={styles.list}>
      {list !== undefined
        ? list.map((todoItem) => (
            <Item
              todoItem={todoItem}
              TodoState={TodoState}
              key={todoItem.todoItemId}
            />
          ))
        : null}
    </div>
  );
};

export { List };
