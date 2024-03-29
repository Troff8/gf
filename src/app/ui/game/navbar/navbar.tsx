import { usePathname } from "next/navigation";
import styles from "@/app/ui/game/navbar/navbar.module.css";
import { MdVolumeMute } from "react-icons/md";
import { GiFrogPrince } from "react-icons/gi";
import Search from "../search/search";
import { modifyNumberString } from "@/utils/game";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Balance{" "}
        <span className={styles.balance}>{modifyNumberString("1230123")}</span>{" "}
        <GiFrogPrince size={15} color="yellow" />
        <button className={styles.button}>replenish</button>
      </div>
      <div className={styles.menu}>
        <Search placeholder={"Players..."} />
        <div className={styles.icons}>
          <MdVolumeMute size={20} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
