import { I_TodoItem } from "../types/main.types";
import {
  T_addTodoInList,
  T_removeTodoInList,
} from "../types/todos.module.types";

const addTodoInList: T_addTodoInList = (
  ItemTitle,
  ItemDescription,
  ColumnIdSelect,
  TodoState
) => {
  if (ColumnIdSelect !== "-1" && ItemTitle !== "" && ItemDescription !== "") {
    const newTodoList = TodoState.todoGetter();

    let maxTodoId = 0;

    newTodoList.forEach((list) => {
      if (list.todoItems !== undefined) {
        list.todoItems.forEach((item) => {
          maxTodoId = maxTodoId < item.todoItemId ? item.todoItemId : maxTodoId;
        });
      }
    });

    const newTodoItem = {
      todoItemId: maxTodoId + 1,
      todoItemTitle: ItemTitle,
      description: ItemDescription,
    };

    newTodoList.forEach((list, index) => {
      if (list.todoListId === Number(ColumnIdSelect)) {
        if (newTodoList[index].todoItems !== undefined) {
          const items: I_TodoItem[] = newTodoList[index].todoItems;
          newTodoList[index].todoItems = [...items, newTodoItem];
        } else {
          newTodoList[index].todoItems = [newTodoItem];
        }
      }
    });

    TodoState.todoSetter(newTodoList);
  }
};

const removeTodoInList: T_removeTodoInList = (todoItemId, TodoState) => {
  const newTodoList = TodoState.todoGetter();

  newTodoList.forEach((column, columnIndex) => {
    column.todoItems.forEach((item, itemIndex) => {
      if (item.todoItemId === todoItemId) {
        newTodoList[columnIndex].todoItems.splice(itemIndex, 1);
      }
    });
  });

  TodoState.todoSetter(newTodoList);
};

export { addTodoInList, removeTodoInList };
