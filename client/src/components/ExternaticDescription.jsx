import building from "../assets/logo/building.svg";
import handShake from "../assets/logo/handshake.svg";
import note from "../assets/logo/note.svg";

import styles from "./externaticDescription.module.css";

export default function ExternaticDescription() {
  return (
    <div className={styles.divClass}>
      <div className={styles.divP}>
        <p>
          Externatic, cabinet de recrutement, met à votre disposition notre
          nouvelle application pour vous accompagner dans vos recherches
          d'emploi dans le passionnant domaine de l'informatique.
        </p>
      </div>

      <div className={styles.logoDiv}>
        <div className={styles.logo}>
          <div className={styles.img}>
            <img src={building} alt="Logo builiding" />
          </div>
          <p>
            <span className={styles.spanPart}>56</span> Entreprises recrutent
          </p>
        </div>
        <div className={styles.logo}>
          <p>
            <span className={styles.spanPart}>+ de 600</span> Postulants
          </p>
          <div className={styles.img}>
            <img src={handShake} alt="Logo hand shake" />
          </div>
        </div>
        <div className={styles.logo}>
          <div className={styles.img}>
            <img src={note} alt="Logo note" />
          </div>
          <p>
            <span className={styles.spanPart}>+ de 2000</span> Offres d'emploi
          </p>
        </div>
      </div>
    </div>
  );
}
