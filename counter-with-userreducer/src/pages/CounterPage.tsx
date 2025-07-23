import React, { useState } from "react";
import type { Count } from "../types/count";
import useCounter from "../hooks/useCounter";

const CounterPage: React.FC<Count> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setValueToAdd(value);
    console.log(typeof value);
  };

  const hanldeSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setCount((count) => count + valueToAdd);
    setValueToAdd(0);
  };
  return (
    <div>
      <h1>Count is: {count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <form onSubmit={hanldeSubmit}>
        <label>Add a lot!</label>
        <input type="number" value={valueToAdd || ""} onChange={handleChange} />
        <button>Add it!!</button>
      </form>
    </div>
  );
};

export default CounterPage;
