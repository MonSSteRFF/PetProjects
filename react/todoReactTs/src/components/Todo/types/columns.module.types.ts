import { I_TodoState } from "../index";

type T_addColumn = (title: string, TodoState: I_TodoState) => void;

type T_deleteColumn = (todoListId: number, TodoState: I_TodoState) => void;

export type { T_addColumn, T_deleteColumn };
