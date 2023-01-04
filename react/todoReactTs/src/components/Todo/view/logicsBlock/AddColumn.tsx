import React, { FC } from "react";
import { useInput } from "../../../../hooks/useInput";
import { Myinput } from "../../../../UI_components/Myinput";
import { Mybutton } from "../../../../UI_components/Mybutton";

import styles from "../../styles/index.module.scss";
import { addColumn } from "../../modules/columns.module";
import { I_TodoState } from "../../index";

const AddColumn: FC<{ TodoState: I_TodoState }> = ({ TodoState }) => {
  const ColumnTitle = useInput("");

  const clickHandler = () => {
    ColumnTitle.manualChange("");
    addColumn(ColumnTitle.value, TodoState);
  };

  return (
    <form className={styles.addColumn}>
      <p>Новый столбец</p>
      <div className={styles.addColumn__wrapper}>
        <Myinput input={ColumnTitle} placeholder={"Название столбца"} />
        <Mybutton onClick={clickHandler}>{"Создать"}</Mybutton>
      </div>
    </form>
  );
};

export { AddColumn };
