import { FetchTodosActions, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  FETCH_TODOS ,
  DELETE_TODO,
}

export type Action=FetchTodosActions|DeleteTodoAction