import { GiFrogPrince } from "react-icons/gi";
import styles from "./rightbar.module.css";
import Image from "next/image";
const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.header}>
          <span className={`${styles.title} ${styles.blue}`}>last winner</span>
        </div>
        <Image
          src="/avatar.jpg"
          alt=""
          width="60"
          height="60"
          className={styles.userImage}
        />
        <div className={`${styles.footer} ${styles.blueFooter}`}>
          <span className={styles.username}>Saul Goodman</span>
          <div className={styles.info}>
            <div className={styles.winBalance}>
              <GiFrogPrince size={15} color="yellow" />
              <span>104</span>
            </div>
            <span>16%</span>
          </div>
        </div>
      </div>
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
              <span>104</span>
            </div>
            <span>16%</span>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.header}>
          <span className={`${styles.title} ${styles.gold}`}>biggest bet</span>
        </div>
        <Image
          src="/avatar.jpg"
          alt=""
          width="60"
          height="60"
          className={styles.userImage}
        />
        <div className={`${styles.footer} ${styles.goldFooter}`}>
          <span className={styles.username}>Saul Goodman</span>
          <div className={styles.info}>
            <div className={styles.winBalance}>
              <GiFrogPrince size={15} color="yellow" />
              <div>104</div>
            </div>
            <span>16%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightBar;
