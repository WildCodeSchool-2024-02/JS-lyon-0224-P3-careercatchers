import { Link } from "react-router-dom";
import Avatar from "../../assets/logo/avatar.svg";
import styles from "./NavBarButtons.module.css";

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
          src={Avatar}
          alt="Log In to your account"
          className={styles.loginButton}
        />
      </Link>
    </div>
  );
}
