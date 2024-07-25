import { Link } from "react-router-dom";
import Avatar from "../../assets/logo/avatar.svg";
import styles from "./NavBarButtons.module.css";
import { useUserContext } from "../../contexts/UserContext";

export default function NavBarButtons() {
  const { user } = useUserContext();

  const renderSwitch = () => {
    if (user === null || user === "null") {
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
    if (user.role === "candidate") {
      return (
        <div className={styles.container}>
          <p>Candidat</p>
          <Link
            to="/profil-page-candidate"
            className={styles.link}
            aria-label="Go to your profile page"
          >
            <img
              src={Avatar}
              alt="Go to your profile page"
              className={styles.loginButton}
            />
          </Link>
        </div>
      );
    }
    return (
      <div className={styles.container}>
        <p>Entreprise</p>
        <Link
          to="/profil-page-company"
          className={styles.link}
          aria-label="Go to your profile page"
        >
          <img
            src={Avatar} // Mettre un avatar d'entreprise ?
            alt="Go to your profile page"
            className={styles.loginButton}
          />
        </Link>
      </div>
    );
  };

  return renderSwitch();
}
