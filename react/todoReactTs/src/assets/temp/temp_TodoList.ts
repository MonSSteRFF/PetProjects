import { I_TodoColumn } from "../../components/Todo/types/main.types";

export const todoList: I_TodoColumn[] = [
  {
    todoListTitle: "Новые",
    todoListId: 0,
    todoItems: [
      {
        todoItemTitle: "Поесть кашу",
        description: "Обязательно ложкой, и сделать фотку",
        todoItemId: 0,
      },
      {
        todoItemTitle: "Поесть арбуз",
        description: "Обязательно вилкой",
        todoItemId: 1,
      },
    ],
  },
  {
    todoListTitle: "В работе",
    todoListId: 1,
    todoItems: [
      {
        todoItemTitle: "Поесть хуй",
        description: "сделать фотку",
        todoItemId: 2,
      },
      {
        todoItemTitle: "Поесть чебупели",
        description: "Обязательно половником",
        todoItemId: 3,
      },
    ],
  },
];
