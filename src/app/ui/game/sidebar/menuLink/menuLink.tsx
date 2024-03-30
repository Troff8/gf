"use client";
import Link from "next/link";
import styles from "./MenuLink.module.css";
import { usePathname } from "next/navigation";
import { ModalEvent, dispatchModalEvent } from "@/utils/dispatchModal";

interface MenuItem {
  title: string;
  path?: string;
  icon: React.ReactNode;
  type: string;
}

const MenuLink = ({ menuItem }: { menuItem: MenuItem }) => {
  const pathname = usePathname();
  return (
    <>
      {menuItem.type === "link" ? (
        <Link
          href={menuItem.path || "#"}
          className={`${styles.container} ${
            pathname == menuItem.path && styles.active
          }`}
        >
          {menuItem.icon}
          {menuItem.title}
        </Link>
      ) : (
        <>
          <div
            className={styles.container}
            onClick={() => {
              menuItem.title === "Reports"
                ? dispatchModalEvent(ModalEvent.ReportCreateModal)()
                : dispatchModalEvent(ModalEvent.SettingsCreateModal)();
            }}
          >
            {menuItem.icon}
            {menuItem.title}
          </div>
        </>
      )}
    </>
  );
};
export default MenuLink;
