import { forwardRef, useImperativeHandle, useRef } from "react";

interface ResultModalProps {
  result: string;
  targetTime: number;
  remainingTime: number;
  onClose: () => void;
}

export interface ResultModalHandle {
  open: () => void;
}

const ResultModal = forwardRef<ResultModalHandle, ResultModalProps>(
  function ResultModal({ result, targetTime, remainingTime, onClose }, ref) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    console.log(formattedRemainingTime);

    useImperativeHandle(ref, () => ({
      open: () => {
        dialogRef.current?.showModal();
      },
    }));
    return (
      <dialog className="result-modal" ref={dialogRef}>
        {userLost && <h2>{result}</h2>}
        <p>
          The target time was <strong>{targetTime} seconds</strong>
        </p>
        <p>
          You stopped the timer with
          <strong>{formattedRemainingTime} seconds left</strong>
        </p>
        <form method="dialog" onSubmit={onClose}>
          <button>Closed</button>
        </form>
      </dialog>
    );
  }
);

export default ResultModal;
