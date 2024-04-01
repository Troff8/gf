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
import { getServerSession } from "next-auth";
import Link from "next/link";

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
const SideBar = async () => {
  const session = await getServerSession();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <GiFrogPrince size={25} color="yellow" />
        Glassfrog
      </div>
      {session && (
        <div className={styles.user}>
          <Image
            src={session.user?.image || "./avatar.jpg"}
            alt=""
            width="50"
            height="50"
            className={styles.userImage}
          />
          <div className={styles.userDetail}>
            <span className={styles.username}>{session.user?.name}</span>
            <span className={styles.userTitle}>Administration</span>
          </div>
        </div>
      )}
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
      <Link href={`${process.env.NEXT_PUBLIC_URL}/api/auth/signout`}>
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </Link>
    </div>
  );
};
export default SideBar;
