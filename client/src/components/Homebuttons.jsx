import { Link } from "react-router-dom";
import styles from "./homeButtons.module.css";

import SignUpButton from "./SignUpButton";

export default function HomeButtons() {
  return (
    <div className={styles.homeButtons}>
      <Link to="/result-page" tabIndex="-1">
        <button className={styles.buttons} type="button">
          Commencer
        </button>
      </Link>
      <Link to="/login-page" tabIndex="-1">
        <button className={styles.buttons} type="button">
          Me connecter
        </button>
      </Link>
      <div className={styles.divSignUp}>
        <SignUpButton />
      </div>
    </div>
  );
}
