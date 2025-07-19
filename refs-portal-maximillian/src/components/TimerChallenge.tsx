import React, { useState } from "react";

interface TimerChallengeProps {
  title: string;
  targetTime: number;
}

const TimerChallenge: React.FC<TimerChallengeProps> = ({
  title,
  targetTime,
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const handleStart = () => {
    if (isRunning || timerExpired) return; // prevent multiple starts
    setIsRunning(true);
    setTimeout(() => {
      setTimerExpired(true);
      setIsRunning(false);
    }, targetTime * 1000);
  };

  const timeText = `${targetTime} ${targetTime === 1 ? "second" : "seconds"}`;

  const statusText = timerExpired
    ? "Time is finished"
    : isRunning
    ? "Time is running"
    : "Timer inactive";

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost</p>}
      <p className="challenge-time">{timeText}</p>
      <p>
        <button onClick={handleStart} disabled={isRunning || timerExpired}>
          {timerExpired ? "Stop " : "Start "}Challenge
        </button>
      </p>
      <p className={isRunning ? "active" : ""}>{statusText}</p>
    </section>
  );
};

export default TimerChallenge;
