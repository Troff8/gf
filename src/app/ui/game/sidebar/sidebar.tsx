import styles from "@/app/ui/game/sidebar/sidebar.module.css";
import {
  MdAnalytics,
  MdAttachMoney,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdShoppingBag,
  MdSupervisedUserCircle,
} from "react-icons/md";
import { GiFrogPrince } from "react-icons/gi";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Game",
        path: "/game",
        type: "link",
        icon: <GiFrogPrince />,
      },
      {
        title: "Players",
        path: "/game/players",
        type: "link",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Shop",
        path: "/game/shop",
        type: "link",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/game/transactions",
        type: "link",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Reports",
        type: "modal",
        icon: <MdAnalytics />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        type: "modal",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/game/help",
        type: "link",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src="/avatar.jpg"
          alt=""
          width="50"
          height="50"
          className={styles.userImage}
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Troff</span>
          <span className={styles.userTitle}>Administration</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink menuItem={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};
export default SideBar;
