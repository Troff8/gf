import { GiFrogPrince } from "react-icons/gi";
import { modifyNumberString } from "@/utils/game";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { getFromDataGFBiggestBet, getFromDataGFLastWinner } from "@/utils/data";

const RightBar = async () => {
  const dataLastWinner = await getFromDataGFLastWinner();
  const dataBiggestBet = await getFromDataGFBiggestBet();
  return (
    <div className={styles.container}>
      {dataLastWinner && (
        <div className={styles.item}>
          <div className={styles.header}>
            <span className={`${styles.title} ${styles.blue}`}>
              last winner
            </span>
          </div>
          <Image
            src={dataLastWinner?.user?.image || ""}
            alt=""
            width="60"
            height="60"
            className={styles.userImage}
          />
          <div className={`${styles.footer} ${styles.blueFooter}`}>
            <span className={styles.username}>
              {dataLastWinner?.user?.nickname}
            </span>
            <div className={styles.info}>
              <div className={styles.winBalance}>
                <GiFrogPrince size={15} color="yellow" />
                <span>{modifyNumberString(dataLastWinner?.sum)}</span>
              </div>
              <span>16%</span>
            </div>
          </div>
        </div>
      )}
      <div className={styles.item}>
        <div className={styles.header}>
          <span className={`${styles.title} ${styles.green}`}>
            luck of the day
          </span>
        </div>
        <Image
          src="/avatar.jpg"
          alt=""
          width="60"
          height="60"
          className={styles.userImage}
        />
        <div className={`${styles.footer} ${styles.greenFooter}`}>
          <span className={styles.username}>Saul Goodman</span>
          <div className={styles.info}>
            <div className={styles.winBalance}>
              <GiFrogPrince size={15} color="yellow" />
              <span>{modifyNumberString(10442)}</span>
            </div>
            <span>16%</span>
          </div>
        </div>
      </div>
      {dataBiggestBet && (
        <div className={styles.item}>
          <div className={styles.header}>
            <span className={`${styles.title} ${styles.gold}`}>
              biggest bet
            </span>
          </div>
          <Image
            src={dataBiggestBet.image || ""}
            alt=""
            width="60"
            height="60"
            className={styles.userImage}
          />
          <div className={`${styles.footer} ${styles.goldFooter}`}>
            <span className={styles.username}>{dataBiggestBet.nickname}</span>
            <div className={styles.info}>
              <div className={styles.winBalance}>
                <GiFrogPrince size={15} color="yellow" />
                <div>{modifyNumberString(dataBiggestBet.maxSum)}</div>
              </div>
              <span>16%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default RightBar;
