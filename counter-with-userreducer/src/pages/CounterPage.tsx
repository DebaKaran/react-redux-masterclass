import React, { useReducer } from "react";
import { produce } from "immer";

import {
  DECREMENT,
  INCREMENT,
  SET_VALUE_TO_ADD,
  ADD_VALUE_TO_COUNT,
} from "../reducers/actionTypes";

import type { Count } from "../types/Count";

type State = {
  count: number;
  valueToAdd: number;
};

type Action =
  | { type: typeof INCREMENT }
  | { type: typeof DECREMENT }
  | { type: typeof SET_VALUE_TO_ADD; payload: number }
  | { type: typeof ADD_VALUE_TO_COUNT };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      state.count = state.count + 1;
      return;
    case DECREMENT:
      state.count = state.count - 1;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
  }
  return state;
};

const CounterPage: React.FC<Count> = ({ initialCount }) => {
  const initalState = { count: initialCount, valueToAdd: 0 };

  const [state, dispatch] = useReducer(produce(reducer), initalState);

  const increment = () => {
    const incrementAction: Action = { type: INCREMENT };
    dispatch(incrementAction);
  };

  const decrement = () => {
    const decrementAction: Action = { type: DECREMENT };
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
