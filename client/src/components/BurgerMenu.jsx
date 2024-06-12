import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BurgerMenu.module.css";
import Burger from "../assets/logo/burger.svg";
import Cross from "../assets/logo/x.svg";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen === false && (
        <button type="button" onClick={handleClick} className={styles.burger}>
          <img src={Burger} alt="open burger menu" />
        </button>
      )}
      {isOpen === true && (
        <div className={styles.menuOpen}>
          <button type="button" onClick={handleClick} className={styles.cross}>
            <img src={Cross} alt="close burger menu" />
          </button>
          <ul className={styles.ul}>
            <Link to="/" className={styles.link} aria-label="HomePage">
              <li>
                Accueil<p>&#62;</p>
              </li>
            </Link>
            <Link
              to="/login-page"
              className={styles.link}
              aria-label="Log in to your account"
            >
              <li>
                Se connecter<p>&#62;</p>
              </li>
            </Link>
            <Link
              to="sign-up-page"
              className={styles.link}
              aria-label="Create a new account"
            >
              <li>
                S'inscrire<p>&#62;</p>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
