import React, { useState } from "react";

interface AppProps {
  color?: string;
}
interface AppState {
  counter: number;
}
const App = (props: AppProps): JSX.Element => {
  // constructor(props: AppProps) {
  //   super(props);
  //   this.state = { counter: 0 };
  // }
  const [counter, setCounter] = useState<number>(0);
  const onIncrement = (): void => {
    setCounter(counter + 1);
  };
  const onDecrement = (): void => {
    setCounter(counter - 1);
    //working without inteface - redefining state object
    // this.setState({ counter: this.state.counter - 1 });
  };

  return (
    <div style={{ color: props.color }}>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      {counter}
    </div>
  );
};

export default App;
