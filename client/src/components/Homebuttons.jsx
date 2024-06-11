import { Link } from "react-router-dom";
import styles from "./homeButtons.module.css";

import SignUpButton from "./SignUpButton";

export default function HomeButtons() {
  return (
    <div className={styles.homeButtons}>
      <Link to="/result-page">
        <button className={styles.buttons} type="button">
          Commencer
        </button>
      </Link>
      <button className={styles.buttons} type="button">
        Me connecter
      </button>
      <div className={styles.divSignUp}>
        <SignUpButton />
      </div>
    </div>
  );
}
