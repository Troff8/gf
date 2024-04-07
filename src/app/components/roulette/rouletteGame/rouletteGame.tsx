"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./rouletteGame.module.css";
import RouletteItem from "./rouletteItem/rouletteItem";
import { Roulette, playerAttributes } from "@/utils/roulette";

interface RouletteElementParams {
  players: playerAttributes[];
  playersCount: number;
  transitionDuration: number;
}

const RoulleteGame = ({
  players,
  playersCount,
  transitionDuration,
}: RouletteElementParams) => {
  const [roulettePlayers, setRoulettePlayers] =
    useState<playerAttributes[]>(players);
  const [playerPrizeId, setPlayerPrizeId] = useState<number>(-1);
  const [isReplay, setIsReplay] = useState<boolean>(false);
  const [isSpin, setIsSpin] = useState<boolean>(false);
  const [isSpinEnd, setIsSpinEnd] = useState<boolean>(false);

  const rouletteContainerRef = useRef<HTMLDivElement>(null);
  const playersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    play();
  }, []);
  function transitionEndHandler() {
    // TODO : record the winner to bd
    setIsSpin(false);
    setIsSpinEnd(true);
  }

  function prepare() {
    playersRef.current!.style.transition = "none";
    playersRef.current!.style.left = "0px";
  }

  function load() {
    let winner = players[Math.floor(Math.random() * players.length)];

    const roulette = new Roulette({
      winner,
      players,
      rouletteContainerRef,
      playersRef,
      playersCount: playersCount,
      transitionDuration: transitionDuration,
    });

    roulette.set_players();
    setRoulettePlayers(roulette.players);

    return roulette;
  }

  function play() {
    if (isReplay) {
      prepare();
    }
    setIsSpin(true);

    const roulette = load();

    setTimeout(() => {
      setIsSpin(true);
      setPlayerPrizeId(roulette.spin());
      setIsReplay(true);
    }, 1000);
  }

  return (
    <div>
      <div className={styles.rouletteWrapper}>
        <div ref={rouletteContainerRef}>
          <div className={styles.evRoulette}>
            <div className={styles.evTarget}></div>
            <div
              ref={playersRef}
              className={styles.evPlayers}
              onTransitionEnd={transitionEndHandler}
            >
              {roulettePlayers.map((p, i) => {
                return (
                  <RouletteItem
                    key={i}
                    id={i}
                    isLoser={i !== playerPrizeId && !isSpin && isSpinEnd}
                    nickname={p.nickname}
                    steam_image={p.steam_image}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoulleteGame;
