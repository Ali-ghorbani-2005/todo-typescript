import { useContext } from "react";
import { todosContext } from "../context/TodoProvider";


export function useTodoContext() {
    return useContext(todosContext)
}