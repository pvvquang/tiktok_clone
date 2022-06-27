import { styleImport } from "~/utils";
import icons from "~/assets/icons";
import styles from "./Header.module.scss";

const cx = styleImport(styles);

function Header() {
  return (
    <header className={cx("header__wrapper")}>
      <div className={cx("header__inner")}>
        <div className={cx("logo")}>
          <img src={icons.logo.default} alt="TikTok" />
        </div>
        <div className={cx("search")}>
          <div className={cx("input-wrapper")}>
            <input type="text" placeholder="Search accounts and videos" />
            <button className={cx("clear")}>
              <ion-icon name="close-circle"></ion-icon>
            </button>
            <button className={cx("loading")}>
              <ion-icon className={cx("loading")} name="sync"></ion-icon>
            </button>
          </div>
          <button className={cx("search-btn")}>
            <ion-icon name="search"></ion-icon>
          </button>
        </div>
        <div className={cx("actions")}>Actions</div>
      </div>
    </header>
  );
}

export default Header;
