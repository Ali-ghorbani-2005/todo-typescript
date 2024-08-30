import { BASE_URL } from "../constants/api";
import axios from "axios";

export async function deleteTodoItem(todoId: string) {
  try {
    const response = await axios.delete(`${BASE_URL}/${todoId}`);
    console.log(response.statusText);
  } catch (e) {
    console.log(e);
  }
}
