"use client";
import styles from "@/app/components/navbar/navbar.module.css";
import Image from "next/image";
import { MdVolumeMute } from "react-icons/md";
import { GiFrogPrince } from "react-icons/gi";
import Search from "../search/search";
import { modifyNumberString } from "@/utils/game";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      {session ? (
        <div className={styles.title}>
          <div className={styles.balanceBlock}>
            Balance
            <span className={styles.balance}>
              {modifyNumberString(1020632)}
            </span>
            <GiFrogPrince size={15} color="yellow" />
          </div>
          <Link href={`/game/shop`}>
            <button className={styles.button}>replenish</button>
          </Link>
          <Link href={`/game/shop`}>
            <button className={styles.button}>withdrawal</button>
          </Link>
        </div>
      ) : (
        <button className={styles.buttonSteam} onClick={() => signIn()}>
          <Image
            src={"/steam.png"}
            alt=""
            width="25"
            height="25"
            className={styles.userImage}
          />
          <span>Войти через Steam</span>
        </button>
      )}
      <div className={styles.menu}>
        <Search placeholder={"Players..."} />
        <div className={styles.icons}>
          <MdVolumeMute size={20} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
