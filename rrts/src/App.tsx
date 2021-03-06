import React from "react";

interface AppProps {
  color?: string;
}
interface AppState {
  counter: number;
}
export default class App extends React.Component<AppProps, AppState> {
  // constructor(props: AppProps) {
  //   super(props);
  //   this.state = { counter: 0 };
  // }
  state = {
    counter: 0,
  };
  onIncrement = (): void => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    //working without inteface - redefining state object
    // this.setState({ counter: this.state.counter + 1 });
  };
  onDecrement = (): void => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    //working without inteface - redefining state object
    // this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div style={{ color: this.props.color }}>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}
