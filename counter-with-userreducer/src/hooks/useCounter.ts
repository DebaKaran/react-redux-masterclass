import { useEffect, useState } from "react";
import type { Count } from "../types/count";

// A custom hook should be a regular function, not a component
const useCounter = ({ initialCount }: number) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, []);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return { count, increment };
};

export default useCounter;
