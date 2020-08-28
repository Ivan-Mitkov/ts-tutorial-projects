import { Todo, FetchTodosActions } from "../actions";
import { ActionTypes } from "../actions/types";

export const todosReducer = (state: Todo[] = [], action: FetchTodosActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return action.payload;

    default:
      return state;
  }
};
