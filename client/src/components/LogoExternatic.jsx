import Logo from "../assets/logo/EXTERNATIC-LOGO-NAME.png";
import styles from "./LogoExternatic.module.css";

export default function LogoExternatic() {
  return (
    <div className={styles.logoHomepage}>
      <img src={Logo} alt="logo Externatic" className={styles.logoExternatic} />
    </div>
  );
}
