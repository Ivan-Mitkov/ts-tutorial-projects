import React, { Component } from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions/todos";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  //fetch todo uses thunk
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}
class _App extends Component<AppProps> {
  // componentDidMount() {
  //   this.props.fetchTodos();
  // }
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };
  deleteTodo = (id: number): void => {
    this.props.deleteTodo(id);
  };
  renderList = (): JSX.Element[] => {
    return this.props.todos.map((t: Todo) => {
      return (
        <div key={t.id} onClick={() => this.deleteTodo(t.id)}>
          {t.title}
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}
const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
