import styles from "@/app/game/game.module.css";
import RightBar from "@/app/components/rightbar/rightbar";
import Roulette from "@/app/components/roulette/roulette";
import TopBar from "@/app/components/topBar/topBar";
import Transactions from "@/app/components/transactions/transactions";

const Game = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <TopBar />
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
