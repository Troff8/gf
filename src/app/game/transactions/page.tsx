import Pagination from "@/app/ui/game/pagination/pagination";
import styles from "@/app/ui/game/TransactionsPage/transactionsPage.module.css";
import Search from "@/app/ui/game/search/search";
import { GiFrogPrince } from "react-icons/gi";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

async function getData() {
  const responce = await fetch("http://localhost:3000/api/transactions/user/1");
  if (!responce.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return responce.json();
}
const TransactionsPage = async () => {
  const transactions = await getData();
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
          {transactions.map((transaction: any) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.date}</td>
                <td>{transaction.createdAt}</td>
                <td>{transaction.type}</td>
                <td>
                  {transaction.sum} <GiFrogPrince size={15} color="yellow" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};
export default TransactionsPage;
