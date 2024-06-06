import { useState } from "react";
import "./BurgerMenu.css";

export default function BurgerMenu() {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  const handleKeyDown = (e) => {
    if (e.target === "m") {
      updateMenu();
    }
  };

  return (
    <div className="burger-container">
      <div className="burger-flexbox">
        <div
          className="burger-menu"
          aria-label="Menu"
          role="button"
          tabIndex="0"
          aria-expanded="false"
          onClick={updateMenu}
          onKeyDown={handleKeyDown}
        >
          <div className={burgerClass} aria-hidden="true">
            {}
          </div>
          <div className={burgerClass} aria-hidden="true">
            {}
          </div>
          <div className={burgerClass} aria-hidden="true">
            {}
          </div>
        </div>
      </div>
      <div className={menuClass}>
        <ul>
          <li>Accueil</li>
        </ul>
      </div>
    </div>
  );
}
