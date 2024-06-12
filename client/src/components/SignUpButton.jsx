import { Link } from "react-router-dom";
import styles from "./signUpButton.module.css";

export default function SignUpButton() {
  return (
    <div className={styles.divLink}>
      <Link className={styles.linkSignUp} to="/sign-up-page">
        Pas encore de compte ?
        <span className={styles.signUp}>Inscrivez-vous</span>
      </Link>
    </div>
  );
}
