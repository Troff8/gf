import React from "react";
import Sidebar from "@/app/components/sidebar/sidebar";
import NavBar from "@/app/components/navbar/navbar";
import styles from "./game.module.css";
import Footer from "@/app/components/footer/footer";
import ModalOnEvent from "@/app/components/modalOnEvent/modalOnEvent";
import { ModalEvent } from "@/utils/dispatchModal";
import dynamic from "next/dynamic";
const ReportsCreateForm = dynamic(
  () => import("@/app/components/reportsCreateForm/reportsCreateForm")
);
const SettingsCreateForm = dynamic(
  () => import("@/app/components/settingsCreateForm/settingsCreateForm")
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
