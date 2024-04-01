import React from "react";
import Sidebar from "@/app/ui/game/sidebar/sidebar";
import NavBar from "../ui/game/navbar/navbar";
import styles from "@/app/ui/game/game.module.css";
import Footer from "../ui/game/footer/footer";
import ModalOnEvent from "../ui/game/modalOnEvent/modalOnEvent";
import { ModalEvent } from "@/utils/dispatchModal";
import SettingsCreateForm from "../ui/game/settingsCreateForm/settingsCreateForm";
import dynamic from "next/dynamic";
const ReportsCreateForm = dynamic(
  () => import("../ui/game/reportsCreateForm/reportsCreateForm")
);
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.wrapperGame}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <NavBar />
          {children}
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <ModalOnEvent event={ModalEvent.ReportCreateModal}>
        <ReportsCreateForm />
      </ModalOnEvent>
      <ModalOnEvent event={ModalEvent.SettingsCreateModal}>
        <SettingsCreateForm />
      </ModalOnEvent>
    </>
  );
};
export default Layout;
