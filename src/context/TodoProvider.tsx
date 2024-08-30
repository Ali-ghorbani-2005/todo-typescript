import { createContext } from "react";
import { Todo, TodoContextType } from "../types/todo";
import { TodoPanel } from "../components/TodoPanel";
import { useGetTodos } from "../hooks/useGetTodos";
import { useSubmitTodo } from "../hooks/useSubmitTodo";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../lib/reactQueryConfig";
import { deleteTodoItem } from "../api/deleteTodo";
import { editTodoItem } from "../api/editTodo"; 


export const todosContext = createContext<TodoContextType | null>(null);

export function TodoProvider() {
  const { data: todos } = useGetTodos();

  const { mutate } = useSubmitTodo();

  const deleteMutation = useMutation({
    mutationFn: (todoId: string) => deleteTodoItem(todoId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const editMutation = useMutation({
    mutationFn: (todo: Todo) => editTodoItem(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  function onSubmit(todo: Todo) {
    mutate(todo);
  }

  function deleteTodo(todoId: string) {
    deleteMutation.mutate(todoId);
  }

  function editTodo(todo: Todo) {
    editMutation.mutate(todo);
  }

  return ( 
    <todosContext.Provider value={{ todos, onSubmit, deleteTodo, editTodo }}>
      <TodoPanel /> 
    </todosContext.Provider>
  );
}

