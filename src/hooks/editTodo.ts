import axios from "axios";
import { Todo } from "../types/todo";
import { BASE_URL } from "../constants/api";

export async function editTodoItem(todo: Todo) {
  try {
    const response = await axios.put(`${BASE_URL}/${todo.id}`, todo);
    console.log(response.statusText);
  } catch (e) {
    console.log(e);
  }
}
