import { Link } from "react-router-dom";
import styles from "./SignUpButton.module.css";

export default function SignUpButton() {
  return (
    <div className={styles.divLink}>
      <p className={styles.signUpBlock}>
        Pas encore de compte ?<br />
        <Link className={styles.signUp} to="/sign-up-page">
          Inscrivez-vous
        </Link>
      </p>
    </div>
  );
}
