import { forwardRef, useImperativeHandle, useRef } from "react";

interface ResultModalProps {
  targetTime: number;
  remainingTime: number;
  onClose: () => void;
}

export interface ResultModalHandle {
  open: () => void;
}

const ResultModal = forwardRef<ResultModalHandle, ResultModalProps>(
  function ResultModal({ targetTime, remainingTime, onClose }, ref) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    console.log(formattedRemainingTime);

    useImperativeHandle(ref, () => ({
      open: () => {
        dialogRef.current?.showModal();
      },
    }));

    return (
      <dialog className="result-modal" ref={dialogRef} onClose={onClose}>
        {userLost && <h2>You Lost</h2>}
        {!userLost && <h2>Your Score: {score}</h2>}
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
