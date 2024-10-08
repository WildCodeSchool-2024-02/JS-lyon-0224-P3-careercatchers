import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Burger from "../../assets/logo/burger.svg";
import Cross from "../../assets/logo/x.svg";
import { useUserContext } from "../../contexts/UserContext";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu() {
  const location = useLocation().pathname;
  const { user, logout } = useUserContext();
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

  const notifyInfo = (text) => toast.info(text);
  const handleLogout = () => {
    logout(false);
    setIsOpen(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
    notifyInfo("À bientôt :)");
  };

  const homePage = "/";
  const resultPage = "/result-page";

  const loginPage = "/login-page";
  const signupPage = "/sign-up-page";

  const profilPageCandidate = "/profil-page-candidate";
  const myApplications = "/page-my-application";

  const profilPageCompany = "/profil-page-company";
  const companyOffers = "/offer-page-company";
  const newOffer = "/post-offer";

  const verifyLocation = (path) => (path === location ? styles.actualPage : "");

  const renderSwitch = () => {
    if (user === null || user === "null") {
      return (
        <ul className={styles.ul}>
          <li className={verifyLocation(homePage)}>
            <Link
              to={homePage}
              className={styles.link}
              aria-label="HomePage"
              onClick={handleClick}
            >
              Accueil
            </Link>
          </li>
          <li className={verifyLocation(resultPage)}>
            <Link to={resultPage} className={styles.link} onClick={handleClick}>
              Les Offres
            </Link>
          </li>
          <li className={verifyLocation(loginPage)}>
            <Link
              to="/login-page"
              className={styles.link}
              aria-label="Log in to your account"
              onClick={handleClick}
            >
              Se connecter
            </Link>
          </li>
          <li className={verifyLocation(signupPage)}>
            <Link
              to="/sign-up-page"
              className={styles.link}
              aria-label="Create a new account"
              onClick={handleClick}
            >
              S'inscrire
            </Link>
          </li>
        </ul>
      );
    }
    if (user.role === "candidate") {
      return (
        <ul className={styles.ul}>
          <li className={verifyLocation(homePage)}>
            <Link to="/" className={styles.link}>
              Accueil
            </Link>
          </li>
          <li className={verifyLocation(resultPage)}>
            <Link to={resultPage} className={styles.link} onClick={handleClick}>
              Les Offres
            </Link>
          </li>
          <li className={verifyLocation(profilPageCandidate)}>
            <Link
              to="/profil-page-candidate"
              className={styles.link}
              onClick={handleClick}
            >
              Mon profil
            </Link>
          </li>
          <li className={verifyLocation(myApplications)}>
            <Link
              to="/page-my-application"
              className={styles.link}
              onClick={handleClick}
              style={{ pointerEvents: "none" }}
            >
              Mes candidatures
            </Link>
          </li>
          <li>
            <Link
              to="/mes-infos"
              className={styles.link}
              onClick={handleClick}
              style={{ pointerEvents: "none" }}
            >
              Mes informations
            </Link>
          </li>
          <li>
            <button
              type="button"
              className={styles.link}
              onClick={handleLogout}
            >
              Se déconnecter
            </button>
          </li>
        </ul>
      );
    }
    return (
      <ul className={styles.ul}>
        <li className={verifyLocation(homePage)}>
          <Link to="/" className={styles.link} onClick={handleClick}>
            Accueil
          </Link>
        </li>
        <li className={verifyLocation(resultPage)}>
          <Link to={resultPage} className={styles.link} onClick={handleClick}>
            Les Offres
          </Link>
        </li>
        <li className={verifyLocation(profilPageCompany)}>
          <Link
            to="/profil-page-company"
            className={styles.link}
            onClick={handleClick}
          >
            Mon profil
          </Link>
        </li>
        <li className={verifyLocation(companyOffers)}>
          <Link
            to="/offer-page-company"
            className={styles.link}
            onClick={handleClick}
          >
            Mes offres
          </Link>
        </li>
        <li className={verifyLocation(newOffer)}>
          <Link to="/post-offer" className={styles.link} onClick={handleClick}>
            Nouvelle offre
          </Link>
        </li>
        <li>
          <button type="button" className={styles.link} onClick={handleLogout}>
            Se déconnecter
          </button>
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
        className={`z-10 ${styles.menuOpen} ${isOpen === true ? styles.active : ""} ${isVisible === true ? "" : styles.hidden}`}
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
