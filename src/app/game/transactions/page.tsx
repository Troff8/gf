import Pagination from "@/app/ui/game/pagination/pagination";
import styles from "@/app/ui/game/TransactionsPage/transactionsPage.module.css";
import Search from "@/app/ui/game/search/search";
import { GiFrogPrince } from "react-icons/gi";

const TransactionsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Transactions..." />
      </div>
      <h2 className={styles.titleTable}>Your transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Hash</td>
            <td>Date</td>
            <td>Time</td>
            <td>Type</td>
            <td>Sum</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23095209435ujwid</td>
            <td>01.01.2024</td>
            <td>16:34:32</td>
            <td>purchase</td>
            <td>
              124124 <GiFrogPrince size={15} color="yellow" />
            </td>
          </tr>
          <tr>
            <td>okdko45knckoso2</td>
            <td>01.01.2024</td>
            <td>18:19:32</td>
            <td>bid</td>
            <td>
              800 <GiFrogPrince size={15} color="yellow" />
            </td>
          </tr>
          <tr>
            <td>ikn234co23nd13</td>
            <td>02.01.2024</td>
            <td>23:19:32</td>
            <td>conclusion</td>
            <td>
              499 <GiFrogPrince size={15} color="yellow" />
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};
export default TransactionsPage;
