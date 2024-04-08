import Image from "next/image";
import styles from "./transactions.module.css";
import { GiFrogPrince } from "react-icons/gi";

interface TransactionsProps {
  id: string;
  userId: string | null;
  type: string;
  sum: number;
  gameId: string | null;
  createdAt: Date;
}
const Transactions = ({
  transactions,
}: {
  transactions: TransactionsProps[];
}) => {
  return (
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
  );
};
export default Transactions;
