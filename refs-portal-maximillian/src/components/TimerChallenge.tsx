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
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const modalRef = useRef<ResultModalHandle>(null);

  const [timerRemaining, setTimeremaining] = useState(targetTime * 1000);

  const timerisActive =
    timerRemaining > 0 && timerRemaining < targetTime * 1000;

  const handleStart = () => {
    if (timerisActive) return;

    timer.current = setInterval(() => {
      setTimeremaining((prevTimeRemaining) => {
        //Automatically stopping the timer once timeremaining is less than or equals to zero
        if (prevTimeRemaining <= 0) {
          clearInterval(timer.current!);
          // Reset the ref after clearing (cleaner logic)
          timer.current = null;
          // When the timer stops automatically (timeRemaining <= 0) → you pass 0 as finalTime to ResultModal.open(0).
          modalRef.current?.open(0); // Show result when time is up
          return 0;
        }
        return prevTimeRemaining - 10;
      });
    }, 10);
  };

  //manually stop the timer
  const handleStop = () => {
    if (timer.current !== null) {
      clearInterval(timer.current);
      // Reset the ref after clearing (cleaner logic)
      timer.current = null;
      //When the timer stops manually (user clicks Stop) → you pass the actual remainingTime like ResultModal.open(remainingTime).
      modalRef.current?.open(timerRemaining);
    }
  };

  const handleReset = () => {
    setTimeremaining(targetTime * 1000); // Reset to full time
  };

  const handleClick = () => {
    if (timerisActive) {
      handleStop();
    } else {
      handleStart();
    }
  };

  const timeText = `${targetTime} ${targetTime === 1 ? "second" : "seconds"}`;

  const statusText = timerisActive ? "Time is running" : "Timer inactive";

  return (
    <>
      <ResultModal
        targetTime={targetTime}
        ref={modalRef}
        onClose={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{timeText}</p>
        <p>
          <button onClick={handleClick}>
            {timerisActive ? "Stop " : "Start "}Challenge
          </button>
        </p>
        <p className={timerisActive ? "active" : ""}>{statusText}</p>
      </section>
    </>
  );
};

export default TimerChallenge;
