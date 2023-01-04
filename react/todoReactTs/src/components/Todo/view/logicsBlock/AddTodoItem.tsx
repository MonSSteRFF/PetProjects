import React, { FC } from "react";
import { I_TodoState } from "../../index";
import styles from "../../styles/index.module.scss";
import { Myinput } from "../../../../UI_components/Myinput";
import { Mybutton } from "../../../../UI_components/Mybutton";
import { useInput } from "../../../../hooks/useInput";
import { Myselect } from "../../../../UI_components/Myselect";
import { useSelect } from "../../../../hooks/useSelect";
import { addTodoInList } from "../../modules/todos.module";

const AddTodoItem: FC<{ TodoState: I_TodoState }> = ({ TodoState }) => {
  const ItemTitle = useInput();
  const ItemDescription = useInput();
  const ColumnIdSelect = useSelect();

  const clickHandler = () => {
    if (
      ItemTitle.value !== "" &&
      ItemDescription.value !== "" &&
      ColumnIdSelect.value !== "-1"
    ) {
      ItemTitle.manualChange("");
      ItemDescription.manualChange("");
      ColumnIdSelect.onChange("-1");

      addTodoInList(
        ItemTitle.value,
        ItemDescription.value,
        ColumnIdSelect.value,
        TodoState
      );
    }
  };

  return (
    <form className={styles.addTodoItem}>
      <p>Новая задача</p>
      <div className={styles.addTodoItem__wrapper}>
        <Myinput input={ItemTitle} placeholder={"Название задачи"} />
        <Myinput input={ItemDescription} placeholder={"Описание"} />

        <Myselect
          select={ColumnIdSelect}
          TodoState={TodoState}
          placeholder={"Выбор столба"}
        />

        <Mybutton onClick={clickHandler}>{"Создать"}</Mybutton>
      </div>
    </form>
  );
};

export { AddTodoItem };
