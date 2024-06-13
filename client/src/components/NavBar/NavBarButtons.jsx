import { Link } from "react-router-dom";
import styles from "./NavBarButtons.module.css";
import LoginSVG from "../../assets/logo/login.svg";

export default function NavBarButtons() {
  return (
    <div className={styles.container}>
      <Link
        to="/sign-up-page"
        className={styles.link}
        aria-label="Create a new account"
        tabIndex="-1"
      >
        <button type="button" className={styles.signupButton}>
          S'inscrire
        </button>
      </Link>
      <Link
        to="/login-page"
        className={styles.link}
        aria-label="Log in to your account"
      >
        <img
          src={LoginSVG}
          alt="Log In to your account"
          className={styles.loginButton}
        />
      </Link>
    </div>
  );
}
