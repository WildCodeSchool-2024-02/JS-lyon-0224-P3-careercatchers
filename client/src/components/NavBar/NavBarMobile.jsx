import NavBarButtons from "./NavBarButtons";
import styles from "./NavBarMobile.module.css";

export default function NavBarMobile() {
  return (
    <nav className={styles.navBar}>
      <div>Burger Menu here</div>
      <NavBarButtons />
    </nav>
  );
}
