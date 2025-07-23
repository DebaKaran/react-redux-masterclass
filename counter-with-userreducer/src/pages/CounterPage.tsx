import React, { useReducer } from "react";
import type { Count } from "../types/count";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change-value-to-add";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

type State = {
  count: number;
  valueToAdd: number;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "change-value-to-add"; payload: number }
  | { type: "add_value_to_count" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNT:
      return { ...state, count: state.count - 1 };
    case SET_VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload };
    case ADD_VALUE_TO_COUNT:
      return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
  }
  return state;
};

const CounterPage: React.FC<Count> = ({ initialCount }) => {
  const initalState = { count: initialCount, valueToAdd: 0 };

  const [state, dispatch] = useReducer(reducer, initalState);

  const increment = () => {
    const incrementAction: Action = { type: INCREMENT_COUNT };
    dispatch(incrementAction);
  };

  const decrement = () => {
    const decrementAction: Action = { type: DECREMENT_COUNT };
    dispatch(decrementAction);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //If user types an empty string, parseInt("") returns NaN.
    const value = parseInt(event.target.value) || 0;
    const changeAction: Action = { type: SET_VALUE_TO_ADD, payload: value };
    dispatch(changeAction);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const addValueToCountAction: Action = { type: ADD_VALUE_TO_COUNT };
    dispatch(addValueToCountAction);
    // setCount((count) => count + valueToAdd);
    // setValueToAdd(0);
  };
  return (
    <div>
      <h1>Count is: {state.count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          value={state.valueToAdd || ""}
          onChange={handleChange}
        />
        <button>Add it!!</button>
      </form>
    </div>
  );
};

export default CounterPage;
