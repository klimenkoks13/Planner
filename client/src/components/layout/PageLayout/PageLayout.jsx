import { Outlet } from "react-router";
import styles from "./PageLayout.module.css";
import Sidebar from "../Sidebar/Sidebar";

function PageLayout() {
  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default PageLayout;
