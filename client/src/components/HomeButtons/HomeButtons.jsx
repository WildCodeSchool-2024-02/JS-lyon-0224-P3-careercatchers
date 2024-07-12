import { Link } from "react-router-dom";
import styles from "./HomeButtons.module.css";
import { useUserContext } from "../../contexts/UserContext";
import SignUpButton from "../SignUpButton/SignUpButton";

export default function HomeButtons() {
  const { user } = useUserContext();
  return user === null || user === "null" ? (
    <div className={styles.homeButtons}>
      <div className="flex justify-around w-3/6">
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
      </div>
      <div className={styles.divSignUp}>
        <SignUpButton />
      </div>
    </div>
  ) : (
    <div className="flex justify-center mb-4">
      <Link to="/result-page" tabIndex="-1">
        <button className={styles.buttons} type="button">
          Parcourir les offres
        </button>
      </Link>
    </div>
  );
}
