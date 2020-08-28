import axios from "axios";
import { ActionTypes } from "./types";
//for type annotations
import { Dispatch } from "redux";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosActions {
  type: ActionTypes.FETCH_TODOS;
  payload: Todo[];
}
const url = "https://jsonplaceholder.typicode.com/todos";
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosActions>({
      type: ActionTypes.FETCH_TODOS,
      payload: response.data,
    });
  };
};
