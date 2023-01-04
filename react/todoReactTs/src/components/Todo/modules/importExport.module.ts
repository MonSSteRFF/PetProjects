import { T_exportFile, T_importFile } from "../types/importExport.module.types";

const importFile: T_importFile = (TodoState, file) => {
  if (file !== undefined) {
    file.text().then((text) => {
      TodoState.todoSetter(JSON.parse(text));
    });
  }
};

const exportFile: T_exportFile = (TodoState) => {
  const todoColumnsJSON: string = JSON.stringify(TodoState.todoGetter());
  const todoColumnsUrl = URL.createObjectURL(new Blob([todoColumnsJSON]));
  const link = document.createElement("a");

  link.download = "todo-save.json";
  link.href = todoColumnsUrl;
  link.click();
};

export { importFile, exportFile };
