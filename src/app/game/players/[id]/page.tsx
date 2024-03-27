import Image from "next/image";
import styles from "@/app/ui/game/playersPage/singleUserPage/singleUserPage.module.css";

const SinglePlayerPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/avatar.jpg" alt="" fill />
        </div>
        Jesse Pinkman
      </div>
      <div className={styles.formContainer}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Jesse Pinkman"
          disabled
        />
        <label>Created at</label>
        <input
          type="text"
          name="Created at"
          placeholder="01.01.2017"
          disabled
        />
        <label>Total games</label>
        <input type="text" name="Total games" placeholder="43" disabled />
        <label>Winning</label>
        <input type="text" name="Winning" placeholder="43590" disabled />
      </div>
    </div>
  );
};
export default SinglePlayerPage;
