import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../lib/reactQueryConfig";
import { Todo } from "../types/todo";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export function useSubmitTodo() {
  return useMutation({
    mutationFn: (todo: Todo) => submitTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });
}

async function submitTodo(todo: Todo) {
  try {
    const response = await axios.post(BASE_URL, todo);
    console.log(response.statusText);
  } catch (e) {
    console.log(e);
  }
}
