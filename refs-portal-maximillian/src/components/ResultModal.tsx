import { forwardRef } from "react";

interface ResultModalProps {
  result: string;
  targetTime: number;
}

const ResultModal = forwardRef<HTMLDialogElement, ResultModalProps>(
  function ResultModal({ result, targetTime }, dialogRef) {
    return (
      <dialog className="result-modal" ref={dialogRef}>
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
  }
);

export default ResultModal;
