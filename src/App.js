import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button
        aria-label="Click to increment"
        onClick={() => dispatch(increment(5))}
      >
        +
      </button>
      <button
        aria-label="Click to deccrement"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      {isLogged && <h3>You are logged in</h3>}
    </div>
  );
}

export default App;
