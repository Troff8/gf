"use client";
import Link from "next/link";
import styles from "./MenuLink.module.css";
import { usePathname } from "next/navigation";

interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const MenuLink = ({ menuItem }: { menuItem: MenuItem }) => {
  const pathname = usePathname();
  return (
    <Link
      href={menuItem.path}
      className={`${styles.container} ${
        pathname == menuItem.path && styles.active
      }`}
    >
      {menuItem.icon}
      {menuItem.title}
    </Link>
  );
};
export default MenuLink;
