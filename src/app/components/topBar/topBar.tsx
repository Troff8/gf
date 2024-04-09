import Card from "../card/card";
import styles from "./topBar.module.css";
import { findGF } from "@/utils/db/db";
const TopBar = async () => {
  const data = await findGF();
  return (
    <div className={styles.cards}>
      <Card
        cardInfo={{ title: "Total players", value: data.players, proc: 13 }}
      />
      <Card cardInfo={{ title: "Total games", value: data.games, proc: 5 }} />
      <Card
        cardInfo={{
          title: "Total winnings",
          value: data.totalWinnings,
          proc: 13,
        }}
      />
    </div>
  );
};
export default TopBar;
