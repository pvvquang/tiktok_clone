import { styleImport } from "~/utils";
import styles from "./Sidebar.module.scss";

const cx = styleImport(styles);

function Sidebar() {
  return <aside className={cx("wrapper")}>Sidebar</aside>;
}

export default Sidebar;
