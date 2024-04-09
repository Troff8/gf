import Pagination from "@/app/components/pagination/pagination";
import styles from "@/app/game/players/playersPage.module.css";
import Search from "@/app/components/search/search";
import Image from "next/image";
import Link from "next/link";
import { GiFrogPrince } from "react-icons/gi";
import { findUsers } from "@/utils/db/db";

interface SearchParams {
  page?: number;
}

const PlayersPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const page = searchParams?.page || 1;
  const data = await findUsers(page);
  if (!data) return;
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
          {data.users.map((user: any) => {
            return (
              <tr key={user.id}>
                <td>
                  <div className={styles.user}>
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt=""
                        width={40}
                        height={40}
                        className={styles.userImage}
                      />
                    ) : null}
                    {user.nickname}
                  </div>
                </td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>{user.totalGames}</td>
                <td>
                  {user.winning} <GiFrogPrince size={15} color="yellow" />
                </td>
                <td>
                  <Link href={`/game/players/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      view
                    </button>
                  </Link>
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
export default PlayersPage;
