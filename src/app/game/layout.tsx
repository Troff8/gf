import React from "react";
import Sidebar from "@/app/ui/game/sidebar/sidebar";
import NavBar from "../ui/game/navbar/navbar";
import styles from "@/app/ui/game/game.module.css";
import Footer from "../ui/game/footer/footer";
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
    </>
  );
};
export default Layout;
