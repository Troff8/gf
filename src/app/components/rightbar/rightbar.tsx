import { GiFrogPrince } from "react-icons/gi";
import { modifyNumberString } from "@/utils/game";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { findBiggestWin, findLastWinner } from "@/utils/db/db";

const RightBar = async () => {
  const dataLastWinner = await findLastWinner();
  const dataBiggestWin = await findBiggestWin();
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
      {dataBiggestWin && (
        <div className={styles.item}>
          <div className={styles.header}>
            <span className={`${styles.title} ${styles.gold}`}>
              biggest win
            </span>
          </div>
          <Image
            src={dataBiggestWin.image || ""}
            alt=""
            width="60"
            height="60"
            className={styles.userImage}
          />
          <div className={`${styles.footer} ${styles.goldFooter}`}>
            <span className={styles.username}>{dataBiggestWin.nickname}</span>
            <div className={styles.info}>
              <div className={styles.winBalance}>
                <GiFrogPrince size={15} color="yellow" />
                <div>{modifyNumberString(dataBiggestWin.maxSum)}</div>
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
