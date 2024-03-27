"use client";

import React, { useEffect, useRef } from "react";
import styles from "./roulette.module.css";

const players: any[] = [];
for (let i = 0; i < 100; i++) {
  players.push(i);
}
const Roulette = () => {
  const ulRef = useRef(null);
  const start = () => {
    const move = -150 * 15 * Math.floor(Math.random() * 2);
    const ulElement = ulRef.current;

    if (ulElement) {
      ulElement.style.left = move + "px";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.scopeHidden}>
          <ul ref={ulRef}>
            {players.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.triangle}></div>
      <button onClick={start}>Go</button>
    </div>
  );
};
export default Roulette;
