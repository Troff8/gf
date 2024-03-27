import styles from "@/app/ui/game/card/card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";
interface CardProps {
  title: string;
  value: string;
  proc: number;
}
const Card = ({ cardInfo }: { cardInfo: CardProps }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{cardInfo.title}</span>
        <span className={styles.value}>{cardInfo.value}</span>
        <div className={styles.detail}>
          <span className={styles.positive}>{cardInfo.proc}%</span> more than
          previous week
        </div>
      </div>
    </div>
  );
};
export default Card;
