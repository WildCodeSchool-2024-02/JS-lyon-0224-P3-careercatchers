import { useState } from "react";
import styles from "./BurgerMenu.module.css";

export default function BurgerMenu() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  const handleKeyDown = (e) => {
    if (e.target === "m") {
      updateMenu();
    }
  };

  return (
    <div className={styles.burgerContainer}>
      <div className={styles.burgerFlexbox}>
        <div
          className={styles.burgerMenu}
          aria-label="Menu"
          role="button"
          tabIndex="0"
          aria-expanded={isMenuClicked}
          onClick={updateMenu}
          onKeyDown={handleKeyDown}
        >
          <div className={styles.burgerBar} aria-hidden="true">
            {}
          </div>
          <div className={styles.burgerBar} aria-hidden="true">
            {}
          </div>
          <div className={styles.burgerBar} aria-hidden="true">
            {}
          </div>
        </div>
      </div>
      <div
        className={`${styles.menu} ${isMenuClicked ? styles.visible : styles.hidden}`}
      >
        <ul>
          <li>Accueil</li>
        </ul>
      </div>
    </div>
  );
}
