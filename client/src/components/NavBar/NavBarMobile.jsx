import NavBarButtons from "./NavBarButtons";
import styles from "./NavBarMobile.module.css";
import BurgerMenu from "./BurgerMenu";

export default function NavBarMobile() {
  return (
    <nav className={styles.navBar}>
      <BurgerMenu />
      <NavBarButtons />
    </nav>
  );
}
