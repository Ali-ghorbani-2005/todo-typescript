export interface Todo {
  createdAt: string;
  title: string;
  deadLine: string;
  id?: string;
}

export type TodoContextType = {
  todos: Todo[];
  onSubmit: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  editTodo: (todo: Todo) => void;
};
