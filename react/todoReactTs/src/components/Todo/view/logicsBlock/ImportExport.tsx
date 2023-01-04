import React, { FC } from "react";
import { I_TodoState } from "../../index";
import {Mybutton} from "../../../../UI_components/Mybutton";
import {MyinputFile} from "../../../../UI_components/MyinputFile";

import styles from "../../styles/index.module.scss"
import {exportFile, importFile} from "../../modules/importExport.module";

const ImportExport: FC<{ TodoState: I_TodoState }> = ({ TodoState }) => {

  return (
    <div className={styles.importExport}>
      <Mybutton onClick={()=> exportFile(TodoState)}>{"Сохранить"}</Mybutton>

      <MyinputFile onChange={importFile} TodoState={TodoState}>{"Загрузить"}</MyinputFile>
    </div>
  )
};

export { ImportExport };
