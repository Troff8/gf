import Image from "next/image";
import styles from "./transactionsGame.module.css";
import { GiFrogPrince } from "react-icons/gi";

const bank = 850;
const bet1 = 500;
const bet2 = 250;

const TransactionsGame = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest moves</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Player</td>
            <td>Chance</td>
            <td>Bid</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jesse Pinkman
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.high}`}>
                {((bet1 / bank) * 100).toFixed(2)}%
              </span>
            </td>
            <td>
              {bet1} <GiFrogPrince size={15} color="yellow" />
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Walter White
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.low}`}>
                {" "}
                {((bet2 / bank) * 100).toFixed(2)}%
              </span>
            </td>
            <td>
              {bet2} <GiFrogPrince size={15} color="yellow" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TransactionsGame;
