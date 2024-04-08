import Image from "next/image";
import styles from "@/app/game/players/[id]/singleUserPage.module.css";
import { getFromInfoUser } from "@/utils/data";
import { Input } from "@/app/components/input/input";
import Transactions from "@/app/components/transactions/transactions";
import Pagination from "@/app/components/pagination/pagination";
import { findTransactions } from "@/utils/db/db";
import { DiVim } from "react-icons/di";

interface SearchParams {
  page?: number;
}

export default async function SinglePlayerPage({
  params,
  searchParams,
}: {
  params: {
    id: string;
    slug: string;
    page?: number;
  };
  searchParams: SearchParams;
}) {
  const data = await getFromInfoUser(params.id);
  if (!data) return;
  const page = searchParams.page || 1;
  const transactions = await findTransactions(params.id, page);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            {data.image ? (
              <Image
                src={data.image}
                alt={data.nickname || ""}
                className={styles.userImage}
                width={287}
                height={300}
              />
            ) : null}
          </div>
          <div>{data.nickname}</div>
          <div> league : {data.rank}</div>
        </div>
        <div className={styles.formContainer}>
          <Input
            label="id"
            id="id"
            disabled
            height={30}
            defaultValue={data.id}
          />
          <Input
            label="Username"
            id="Username"
            disabled
            height={30}
            defaultValue={data.nickname}
          />
          <Input
            label="Created at"
            id="Created at"
            disabled
            height={30}
            defaultValue={data.createdAt.toLocaleDateString()}
          />
          <Input
            label="Total games"
            id="Total games"
            disabled
            height={30}
            defaultValue={data.totalGames}
          />
          <Input
            label="Winning"
            id="Winning"
            disabled
            height={30}
            defaultValue={data.winning}
          />
        </div>
      </div>
      {transactions.totalCount === 0 ? (
        <h2 className={styles.titleTable}>The player had no transactions</h2>
      ) : (
        <>
          <h2 className={styles.titleTable}>All transactions</h2>
          <Transactions transactions={transactions.transactions} />
          <Pagination count={transactions.totalCount} />
        </>
      )}
    </div>
  );
}
