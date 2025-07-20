import type React from "react";
import { useEffect } from "react";

interface ResultModalProps {
  result: string;
  targetTime: number;
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}

const ResultModal: React.FC<ResultModalProps> = ({
  result,
  targetTime,
  dialogRef,
}) => {
  // useEffect(() => {
  //   if (dialogRef.current && !dialogRef.current.open) {
  //     dialogRef.current.showModal(); // imperatively open the dialog
  //   }
  // }, [dialogRef]);

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
};

export default ResultModal;
