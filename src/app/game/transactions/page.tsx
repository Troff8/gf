import Pagination from "@/app/components/pagination/pagination";
import styles from "@/app/game/transactions/transactionsPage.module.css";
import Search from "@/app/components/search/search";
import { getFromDataTransactions } from "@/utils/data";
import Transactions from "@/app/components/transactions/transactions";
interface SearchParams {
  page?: number;
}

const TransactionsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const page = searchParams?.page || 1;
  const data = await getFromDataTransactions("cluq3b85w0000usi2y83y32fg", page); // FIXME
  if (!data) return;
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Transactions..." />
      </div>
      <h2 className={styles.titleTable}>Your transactions</h2>
      <Transactions transactions={data.transactions} />
      <Pagination count={data.totalCount} />
    </div>
  );
};
export default TransactionsPage;
