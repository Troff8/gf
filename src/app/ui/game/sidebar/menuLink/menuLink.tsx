"use client";
import Link from "next/link";
import styles from "./MenuLink.module.css";
import { usePathname } from "next/navigation";
import Modal from "../../modal/modal";
import ReportsCreateForm from "../../reportsCreateForm/reportsCreateForm";
import useModal from "../../hooks/useModal";
import SettingsCreateForm from "../../settingsCreateForm/settingsCreateForm";

export type TypeMenuItem = "link" | "modal";
interface MenuItem {
  title: string;
  path?: string;
  icon: React.ReactNode;
  type: TypeMenuItem;
}

const MenuLink = ({ menuItem }: { menuItem: MenuItem }) => {
  const pathname = usePathname();
  const { ref, onOpen, onClose } = useModal();
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
          <div className={styles.container} onClick={onOpen}>
            {menuItem.icon}
            {menuItem.title}
          </div>
          <Modal ref={ref} visible>
            {menuItem.title === "Reports" ? (
              <ReportsCreateForm onClose={onClose} />
            ) : (
              <SettingsCreateForm onClose={onClose} />
            )}
          </Modal>
        </>
      )}
    </>
  );
};
export default MenuLink;
