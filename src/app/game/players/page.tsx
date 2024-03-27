import Pagination from "@/app/ui/game/pagination/pagination";
import styles from "@/app/ui/game/PlayersPage/playersPage.module.css";
import Search from "@/app/ui/game/search/search";
import Image from "next/image";
import Link from "next/link";
import { GiFrogPrince } from "react-icons/gi";

const PlayersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Players..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Player</td>
            <td>Created at</td>
            <td>Total games</td>
            <td>Winning</td>
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
            <td>01.01.2024</td>
            <td>134</td>
            <td>
              124124 <GiFrogPrince size={15} color="yellow" />
            </td>
            <td>
              <Link href={`/game/players/${1}`}>
                <button className={`${styles.button} ${styles.view}`}>
                  view
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};
export default PlayersPage;
