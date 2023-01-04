import { I_TodoColumn } from "../types/main.types";
import { T_addColumn, T_deleteColumn } from "../types/columns.module.types";

const addColumn: T_addColumn = (title, TodoState) => {
  if (title !== "") {
    const todoColumns: I_TodoColumn[] = TodoState.todoGetter();

    let maxId = -1;

    todoColumns.forEach((column) => {
      maxId = maxId < column.todoListId ? column.todoListId : maxId;
    });

    todoColumns.push({
      todoListId: maxId + 1,
      todoListTitle: title,
      todoItems: [],
    });

    TodoState.todoSetter(todoColumns);
  }
};

const deleteColumn: T_deleteColumn = (todoListId, TodoState) => {
  TodoState.todoSetter(
    TodoState.todoGetter().filter((column) => column.todoListId !== todoListId)
  );
};

export { addColumn, deleteColumn };
