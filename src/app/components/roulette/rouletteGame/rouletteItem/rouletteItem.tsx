import React from "react";
import Image from "next/image";
import styles from "./RouletteItem.module.css";

interface rouletteItemProps {
  id: number;
  nickname: string;
  steam_image: string;
  isLoser: boolean;
}

const RouletteItem = ({
  id,
  nickname,
  steam_image,
  isLoser,
}: rouletteItemProps) => {
  return (
    <div
      className={styles.evPlayer}
      style={isLoser ? { opacity: "0.5" } : { opacity: "1" }}
    >
      <div className={`${styles.evPlayerInner}`} id={String(id)}>
        <Image src={steam_image} alt={nickname} width={190} height={140} />
        <div className={styles.evPlayerText}>
          <p>{nickname}</p>
          <p>Chancy : 80%</p>
        </div>
      </div>
    </div>
  );
};

export default RouletteItem;
