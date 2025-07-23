import React from "react";
import type { Count } from "../types/count";
import useCounter from "../hooks/useCounter";

const CounterPage: React.FC<Count> = ({ initialCount }) => {
  const { count, increment } = useCounter({ initialCount });
  return (
    <div>
      <h1>Count is: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CounterPage;
