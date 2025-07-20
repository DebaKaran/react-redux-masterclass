import type React from "react";

interface ResultModalProps {
  result: string;
  targetTime: number;
}

const ResultModal: React.FC<ResultModalProps> = ({ result, targetTime }) => {
  return (
    <dialog className="result-modal" open>
      <h2>{result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Closed</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
