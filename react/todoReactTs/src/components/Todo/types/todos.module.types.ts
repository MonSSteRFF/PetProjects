import { I_TodoState } from "../index";

type T_addTodoInList = (
  ItemTitle: string,
  ItemDescription: string,
  ColumnIdSelect: string,
  TodoState: I_TodoState
) => void;

type T_removeTodoInList = (todoItemId: number, TodoState: I_TodoState) => void;

export type { T_addTodoInList, T_removeTodoInList };
