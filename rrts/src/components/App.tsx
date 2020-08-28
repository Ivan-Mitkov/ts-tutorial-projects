import React, { Component } from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers/";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}
class _App extends Component<AppProps> {
  // componentDidMount() {
  //   this.props.fetchTodos();
  // }
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };
  renderList = (): JSX.Element[] => {
    return this.props.todos.map((t: Todo) => {
      return <div key={t.id}>{t.title}</div>;
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
export const App = connect(mapStateToProps, { fetchTodos })(_App);
