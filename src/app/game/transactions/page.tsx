import Pagination from "@/app/ui/game/pagination/pagination";
import styles from "@/app/ui/game/TransactionsPage/transactionsPage.module.css";
import Search from "@/app/ui/game/search/search";
import { GiFrogPrince } from "react-icons/gi";
import { getFromDataTransactions } from "@/utils/data";
interface SearchParams {
  page?: number;
}

const TransactionsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const page = searchParams?.page || 1;
  const data = await getFromDataTransactions("clueaqqp90000jd0am7xpuomn", page); // FIXME
  if (!data) return;
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
          {data.transactions.map((transaction: any) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
                <td>{new Date(transaction.createdAt).toLocaleTimeString()}</td>
                <td>{transaction.type}</td>
                <td>
                  {transaction.sum} <GiFrogPrince size={15} color="yellow" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={data.totalCount} />
    </div>
  );
};
export default TransactionsPage;
