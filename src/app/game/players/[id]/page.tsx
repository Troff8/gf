import Image from "next/image";
import styles from "@/app/game/players/[id]/singleUserPage.module.css";
import { getFromInfoUser } from "@/utils/data";

export default async function SinglePlayerPage({
  params,
}: {
  params: {
    id: string;
    slug: string;
  };
}) {
  const data = await getFromInfoUser(params.id);
  if (!data) return;
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          {data.image ? (
            <Image src={data.image} alt="" className={styles.userImage} fill />
          ) : null}
        </div>
        {data.nickname}
      </div>
      <div className={styles.formContainer}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder={`${data.nickname}`}
          disabled
        />
        <label>Created at</label>
        <input
          type="text"
          name="Created at"
          placeholder={`${new Date(data.createdAt).toLocaleDateString()}`}
          disabled
        />
        <label>Total games</label>
        <input
          type="text"
          name="Total games"
          placeholder={`${data.totalGames}`}
          disabled
        />
        <label>Winning</label>
        <input
          type="text"
          name="Winning"
          placeholder={`${data.winning}`}
          disabled
        />
      </div>
    </div>
  );
}
// export default SinglePlayerPage;
