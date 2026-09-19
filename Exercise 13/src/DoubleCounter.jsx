import { useReducer } from "react";

// initial state
const initialState = { counter1: 0, counter2: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementA":
      return { ...state, counter1: state.counter1 + 1 };
    case "decrementA":
      return { ...state, counter1: state.counter1 - 1 };
    case "incrementB":
      return { ...state, counter2: state.counter2 + 1 };
    case "decrementB":
      return { ...state, counter2: state.counter2 - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const DoubleCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Double Counter</h2>
      <h3>Count A: {state.counter1}</h3>
      <button onClick={() => dispatch({ type: "incrementA" })}>A+</button>
      <button
        onClick={() => dispatch({ type: "decrementA" })}
        disabled={state.counter1 === 0}
      >
        A-
      </button>
      <h2>Count B: {state.counter2}</h2>
      <button onClick={() => dispatch({ type: "incrementB" })}>B+</button>
      <button
        onClick={() => dispatch({ type: "decrementB" })}
        disabled={state.counter2 === 0}
      >
        B-
      </button>{" "}
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset Both</button>
    </div>
  );
};

export default DoubleCounter;
