import React, { FC } from "react";
import { Mybutton } from "../../../../UI_components/Mybutton";

import styles from "../../styles/index.module.scss";
import { I_TodoState } from "../../index";
import { deleteColumn } from "../../modules/columns.module";

const RemoveColumn: FC<{
  TodoState: I_TodoState;
  todoListId: number;
}> = ({ TodoState, todoListId }) => {
  const clickHandler = () => {
    deleteColumn(todoListId, TodoState);
  };

  return (
    <div className={styles.removeColumn}>
      <Mybutton onClick={clickHandler}>{"Удалить"}</Mybutton>
    </div>
  );
};

export { RemoveColumn };
