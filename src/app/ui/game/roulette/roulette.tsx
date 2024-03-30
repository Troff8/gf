"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./roulette.module.css";
import clsx from "clsx";
import { GiFrogPrince } from "react-icons/gi";
import { modifyNumberString } from "@/utils/game";

const cells = 31;

const items = [
  { name: "gf", img: "/avatar.jpg", chance: 99 },
  { name: "jesse", img: "/jesse.jpg", chance: 1 },
  { name: "walter", img: "/walterWhite.png", chance: 0 },
  { name: "soul", img: "/soul.jpeg", chance: 0 },
];

const Roulette = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>();
  const [players, setPlayers] = useState([]);
  let isFirstStart = true;

  function getItem() {
    let item;

    while (!item) {
      const chance = Math.floor(Math.random() * 100);

      items.forEach((elm) => {
        if (chance < elm.chance && !item) item = elm;
      });
    }

    return item;
  }

  function generateItems() {
    for (let i = 0; i < cells; i++) {
      const item = getItem();
      setPlayers([...players, item]);
    }
  }

  const start = () => {
    if (isStarted) return;
    setIsStarted(true);
    if (!isFirstStart) generateItems();
    isFirstStart = false;
  };

  useEffect(() => {
    if (isStarted) {
      const interval = setInterval(() => {
        const index = Math.floor(Math.random() * cells);
        setSelectedItemIndex(index);
      }, 100);

      setTimeout(() => {
        setIsStarted(false);
        clearInterval(interval);
      }, 5000); // Transition time

      return () => clearInterval(interval);
    }
  }, [isStarted]);

  return (
    <div className={styles.container}>
      <div className={styles.game}>Game #12312412</div>
      <div className={styles.roulette}>
        <div className={styles.triangle}></div>
        <div className={styles.scope}>
          <ul
            className={clsx(styles.list, {
              [styles.isStoped]: !isStarted,
              [styles.isStarted]: isStarted,
            })}
          >
            {[...Array(cells)].map((_, index) => {
              const item = items[index % items.length];
              return (
                <li
                  key={index}
                  className={clsx(styles.list__item, {
                    [styles.active]: index === selectedItemIndex,
                  })}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={100}
                    height={100}
                    className={styles.image}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.game}>
        <div className={styles.information}>
          <div>
            Winner: <span className={styles.nicknameWinner}>???</span>
          </div>
          <div className={styles.bet}>
            <GiFrogPrince size={20} color="yellow" />
            <div>{modifyNumberString("1231123")}</div>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.text}>
            Min bet 2 <GiFrogPrince size={15} color="yellow" />
            <div> The higher the bet, the greater the chance to win.</div>
          </div>
          <button onClick={start} className={styles.start}>
            Place a bet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roulette;
