import { getFromDataGF } from "@/utils/data";
import Card from "../card/card";
import styles from "./topBar.module.css";
const TopBar = async () => {
  const data = await getFromDataGF();
  return (
    <div className={styles.cards}>
      <Card
        cardInfo={{ title: "Total players", value: data.players, proc: 13 }}
      />
      <Card cardInfo={{ title: "Total games", value: data.games, proc: 5 }} />
      <Card
        cardInfo={{
          title: "Total winnings",
          value: data.totalWinnings._sum.winning,
          proc: 13,
        }}
      />
    </div>
  );
};
export default TopBar;
