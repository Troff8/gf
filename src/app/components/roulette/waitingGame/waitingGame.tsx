import { useEffect, useState } from "react";
import styles from "./waitingGame.module.css";

type WaitingGameProps = {
  setGame: (value: boolean) => void;
};
export const WaitingGame = ({ setGame }: WaitingGameProps) => {
  const [seconds, setSeconds] = useState(20);
  const [timerFinished, setTimerFinished] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(interval);
          setTimerFinished(true);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timerFinished) {
      setGame(true);
    }
  }, [timerFinished, setGame]);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.timer}>
          {seconds} <span>SECONDS</span>
        </div>
        {true ? ( // TODO
          <div className={styles.minPLayers}>Waiting min 2 players...</div>
        ) : (
          <div className={styles.minPLayers}>2 players in game...</div>
        )}
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ right: `${(10 - seconds) * 10}%` }}
        ></div>
      </div>
    </div>
  );
};
