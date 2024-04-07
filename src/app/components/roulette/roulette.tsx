"use client";
import styles from "./roulette.module.css";
import { GiFrogPrince } from "react-icons/gi";
import { modifyNumberString } from "@/utils/game";
import RouletteGame from "./rouletteGame/rouletteGame";
import { SiAdguard } from "react-icons/si";
import { FaCopy } from "react-icons/fa";
import { Input } from "../input/input";
import { useCallback, useEffect, useState } from "react";
import { WaitingGame } from "./waitingGame/waitingGame";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

// The playersCount variable is responsible for the number of blocks in roulette
const playersCount = 150;

// The transitionDuration variable is responsible for the duration of the roulette scrolling
const transitionDuration = 3;

// The more you specify objects of the same players, the more often it will fall out
const players = [
  {
    nickname: "jesse",
    steam_image: "/jesse.jpg",
  },
  {
    nickname: "soul",
    steam_image: "/soul.jpeg",
  },
  {
    nickname: "soul",
    steam_image: "/soul.jpeg",
  },
  {
    nickname: "soul",
    steam_image: "/soul.jpeg",
  },
  {
    nickname: "walterWhite",
    steam_image: "/walterWhite.png",
  },
];

const Roulette = () => {
  const [startGame, setStartGame] = useState(false);
  const [, copyValue] = useCopyToClipboard();

  const onCopyDescription = useCallback(() => {
    // if (!hash) return;

    copyValue("game12312");
  }, [copyValue]);
  return (
    <div className={styles.container}>
      <div className={styles.infoGame}>
        <div className={styles.gameTitle}>
          <div className={styles.gameHash}>
            <SiAdguard />
            Game
          </div>
          <div className={styles.gameHash}>
            #12312412{" "}
            <FaCopy
              size={12}
              onClick={onCopyDescription}
              className={styles.copy}
            />
          </div>
        </div>
        <div className={styles.information}>
          <div>
            Winner: <span className={styles.nicknameWinner}>???</span>
          </div>
          <div className={styles.bet}>
            <GiFrogPrince size={20} color="yellow" />
            <div>{modifyNumberString(1231231)}</div>
          </div>
        </div>
      </div>
      <div className={styles.roulette}>
        {startGame ? (
          <RouletteGame
            players={players}
            playersCount={playersCount}
            transitionDuration={transitionDuration}
          />
        ) : (
          <WaitingGame setGame={setStartGame} />
        )}
      </div>
      <div className={styles.game}>
        <div className={styles.infoBet}>
          Bet: 500
          <GiFrogPrince size={15} color="yellow" />
        </div>
        <div className={styles.actions}>
          <div className={styles.text}>
            <div>
              Min bet 2 <GiFrogPrince size={15} color="yellow" />
            </div>
            <div> The higher the bet, the greater the chance to win.</div>
            <div> More details about increasing winnings on the page FAQ.</div>
          </div>
          <div className={styles.bets}>
            <div className={styles.autoBets}>
              <button className={styles.start}>
                <GiFrogPrince size={15} color="yellow" /> 2 GF
              </button>
              <button className={styles.start}>
                <GiFrogPrince size={15} color="yellow" /> 5 GF
              </button>
              <button className={styles.start}>
                <GiFrogPrince size={15} color="yellow" /> 10 GF
              </button>
              <button className={styles.start}>MAX</button>
            </div>
            <div className={styles.anyBets}>
              <Input id="Bet" type="number" min={0} />
              <button className={styles.start}>Bet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roulette;
