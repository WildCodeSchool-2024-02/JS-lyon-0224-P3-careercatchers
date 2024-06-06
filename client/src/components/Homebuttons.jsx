import { Link } from "react-router-dom";
import style from "./homeButtons.module.css";

export default function HomeButtons() {
  return (
    <div className={style.homeButtons}>
      <Link to="/result-page">
        <button className={style.buttons} type="button">
          Commencer
        </button>
      </Link>
      <button className={style.buttons} type="button">
        Me connecter
      </button>
    </div>
  );
}
