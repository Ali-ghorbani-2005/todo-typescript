import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export function useGetTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
}

async function fetchTodos() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
