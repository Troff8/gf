import styles from "../ui/game/game.module.css";
import RightBar from "../ui/game/rightbar/rightbar";
import Roulette from "../ui/game/roulette/roulette";
import TopBar from "../ui/game/topBar/topBar";
import Transactions from "../ui/game/transactions/transactions";

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
