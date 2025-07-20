import { forwardRef, useImperativeHandle, useRef, useState } from "react";

interface ResultModalProps {
  result: string;
  targetTime: number;
}

export interface ResultModalHandle {
  open: () => void;
}

const ResultModal = forwardRef<ResultModalHandle, ResultModalProps>(
  function ResultModal({ result, targetTime }, ref) {
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => {
        setIsVisible(true);
      },
    }));
    return (
      isVisible && (
        <div className="result-modal">
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
        </div>
      )
    );
  }
);

export default ResultModal;
