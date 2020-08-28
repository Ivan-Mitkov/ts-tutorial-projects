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

interface AppState {
  fetching: boolean;
}
class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  // componentDidMount() {
  //   this.props.fetchTodos();
  // }
  componentDidUpdate(prevProps: AppProps, prevState: AppState): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
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
        {this.state.fetching ? "Loading" : null}
      </div>
    );
  }
}
const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
