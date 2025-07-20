import React, { useRef, useState } from "react";
import ResultModal, { type ResultModalHandle } from "./ResultModal";

interface TimerChallengeProps {
  title: string;
  targetTime: number;
}

//let timer: ReturnType<typeof setTimeout>;

const TimerChallenge: React.FC<TimerChallengeProps> = ({
  title,
  targetTime,
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const modalRef = useRef<ResultModalHandle>(null);

  const handleStart = () => {
    if (isRunning || timerExpired) return; // prevent multiple starts
    setIsRunning(true);
    timer.current = setTimeout(() => {
      console.log(`${title} timer expired`);
      setTimerExpired(true);
      setIsRunning(false);
      modalRef.current?.open();
    }, targetTime * 1000);
  };

  const handleStop = () => {
    if (timer.current !== null) {
      clearTimeout(timer.current);
      // Reset the ref after clearing (cleaner logic)
      timer.current = null;
    }
    setIsRunning(false);
  };

  const handleClick = () => {
    if (isRunning) {
      handleStop();
    } else {
      handleStart();
    }
  };

  const timeText = `${targetTime} ${targetTime === 1 ? "second" : "seconds"}`;

  const statusText = timerExpired
    ? "Time is finished"
    : isRunning
    ? "Time is running"
    : "Timer inactive";

  return (
    <>
      <ResultModal result="You Lost" targetTime={targetTime} ref={modalRef} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{timeText}</p>
        <p>
          <button onClick={handleClick} disabled={timerExpired}>
            {isRunning ? "Stop " : "Start "}Challenge
          </button>
        </p>
        <p className={isRunning ? "active" : ""}>{statusText}</p>
      </section>
    </>
  );
};

export default TimerChallenge;
