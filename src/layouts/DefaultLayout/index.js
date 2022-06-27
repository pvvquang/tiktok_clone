import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import { styleImport } from "~/utils";
import styles from "./DefaultLayout.module.scss";

const cx = styleImport(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar></Sidebar>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
