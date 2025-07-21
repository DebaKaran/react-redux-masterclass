import { forwardRef, useImperativeHandle, useRef, useState } from "react";

interface ResultModalProps {
  targetTime: number;
  onClose: () => void;
}

export interface ResultModalHandle {
  open: (finalRemainingTime: number) => void;
}

const ResultModal = forwardRef<ResultModalHandle, ResultModalProps>(
  function ResultModal({ targetTime, onClose }, ref) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [finalTime, setFinalTime] = useState<string | null>(null);

    const userLost = finalTime != null && +finalTime <= 0;

    let score: number | undefined;
    if (finalTime != null) {
      score = Math.round((1 - +finalTime / targetTime) * 100);
    }

    useImperativeHandle(ref, () => ({
      open: (remainingTime) => {
        const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
        setFinalTime(formattedRemainingTime);
        console.log(formattedRemainingTime);
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
          <strong>{finalTime} seconds left</strong>
        </p>
        <form method="dialog" onSubmit={onClose}>
          <button>Closed</button>
        </form>
      </dialog>
    );
  }
);

export default ResultModal;
