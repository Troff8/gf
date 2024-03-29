import { title } from "process";
import Card from "../ui/game/card/card";
import styles from "../ui/game/game.module.css";
import RightBar from "../ui/game/rightbar/rightbar";
import Roulette from "../ui/game/roulette/roulette";
import Transactions from "../ui/game/transactions/transactions";

const Game = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card
            cardInfo={{ title: "Total players", value: "10423", proc: 13 }}
          />
          <Card cardInfo={{ title: "Total games", value: "777", proc: 5 }} />
          <Card
            cardInfo={{ title: "Total winnings", value: "1003323", proc: 13 }}
          />
        </div>
        <Roulette />
        <Transactions />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};
export default Game;
