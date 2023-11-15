import { useReducer } from "react";
import "./App.css";

let initialValue = { count: 0 };
let reducer = function (state, action) {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "Decrement":
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
      return state;
    default:
      throw new Error("Unexpected Action type");
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <>
      <h1>Counter Using useReducer Hook</h1>
      <main>
        <button
          onClick={() => {
            dispatch({ type: "Increment" });
          }}
        >
          Increase
        </button>
        <div>{state.count}</div>
        <button
          onClick={() => {
            dispatch({ type: "Decrement" });
          }}
        >
          Decrease
        </button>
      </main>
    </>
  );
}

export default Counter;
