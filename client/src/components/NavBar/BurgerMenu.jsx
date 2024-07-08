import { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../../assets/logo/burger.svg";
import Cross from "../../assets/logo/x.svg";
import styles from "./BurgerMenu.module.css";
import { useUserContext } from "../../contexts/UserContext";

export default function BurgerMenu() {
  const { user } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    if (isOpen === true) {
      setIsOpen(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    } else {
      setIsVisible(true);
      setIsOpen(true);
    }
  };

  const renderSwitch = () => {
    if (user.role === "candidate") {
      return (
        <ul className={styles.ul}>
          <li>
            <Link to="/" className={styles.link}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/profil-page-candidate" className={styles.link}>
              Mon profil
            </Link>
          </li>
          <li>
            <Link to="/page-my-application" className={styles.link}>
              Mes candidatures
            </Link>
          </li>
          <li>
            <Link to="/mes-infos" className={styles.link}>
              Mes informations
            </Link>
          </li>
        </ul>
      );
    }
    if (user.role === "company") {
      return (
        <ul className={styles.ul}>
          <li>
            <Link to="/" className={styles.link}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/profil-page-company" className={styles.link}>
              Mon profil
            </Link>
          </li>
          <li>
            <Link to="/offer-page-company" className={styles.link}>
              Mes offres
            </Link>
          </li>
          <li>
            <Link to="/mes-infos" className={styles.link}>
              Mes informations
            </Link>
          </li>
        </ul>
      );
    }
    return (
      <ul className={styles.ul}>
        <li>
          <Link to="/" className={styles.link} aria-label="HomePage">
            Accueil
          </Link>
          <p>&#62;</p>
        </li>
        <li>
          <Link
            to="/login-page"
            className={styles.link}
            aria-label="Log in to your account"
          >
            Se connecter
          </Link>
          <p>&#62;</p>
        </li>
        <li>
          <Link
            to="/sign-up-page"
            className={styles.link}
            aria-label="Create a new account"
          >
            S'inscrire
          </Link>
          <p>&#62;</p>
        </li>
      </ul>
    );
  };

  return (
    <div>
      {isOpen === false && (
        <button
          type="button"
          onClick={handleClick}
          className={styles.burger}
          aria-expanded={isOpen}
          aria-controls="burger-menu"
        >
          <img src={Burger} alt="open burger menu" />
        </button>
      )}
      <nav
        className={`${styles.menuOpen} ${isOpen === true ? styles.active : ""} ${isVisible === true ? "" : styles.hidden}`}
        role="navigation"
        aria-label="Main Menu"
        id="burger-menu"
      >
        <button type="button" onClick={handleClick} className={styles.cross}>
          <img src={Cross} alt="close burger menu" />
        </button>
        {renderSwitch()}
      </nav>
    </div>
  );
}
