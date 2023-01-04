interface I_TodoItem {
  todoItemTitle: string;
  description: string;
  todoItemId: number;
}

interface I_TodoColumn {
  todoListTitle: string;
  todoListId: number;
  todoItems: I_TodoItem[];
}

export type { I_TodoItem, I_TodoColumn };
