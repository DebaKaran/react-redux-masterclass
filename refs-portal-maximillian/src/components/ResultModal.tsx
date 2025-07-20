import { forwardRef, useImperativeHandle, useRef } from "react";

interface ResultModalProps {
  result: string;
  targetTime: number;
}

export interface ResultModalHandle {
  open: () => void;
}

const ResultModal = forwardRef<ResultModalHandle, ResultModalProps>(
  function ResultModal({ result, targetTime }, ref) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
      open: () => {
        dialogRef.current?.showModal();
      },
    }));
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
