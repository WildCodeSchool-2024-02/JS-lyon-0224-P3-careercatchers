import building from "../../assets/logo/building.svg";
import handShake from "../../assets/logo/handshake.svg";
import note from "../../assets/logo/note.svg";

import styles from "./ExternaticDescription.module.css";

export default function ExternaticDescription() {
  return (
    <div className={styles.divClass}>
      <div className={styles.divP}>
        <p className="pb-6 text-2xl">Attrapez votre avenir</p>
        <p>
          Externatic, cabinet de recrutement, met à votre disposition notre
          nouvelle application pour vous accompagner dans vos recherches
          d'emploi dans le passionnant domaine de l'informatique.
        </p>
      </div>
      <div className={styles.logoDiv}>
        <div className={styles.logo}>
          <div className={styles.imgBlock}>
            <img src={building} alt="Logo builiding" className={styles.img} />
          </div>
          <p className={styles.p}>
            <span className={styles.spanPart}>13 </span>
            <span>Ans de professionnalisme</span>
          </p>
        </div>
        <div className={`${styles.logo} relative left-7 z-0`}>
          <p className={styles.p}>
            <span className={styles.spanPart}>33</span>
            <span>Consultants</span>
          </p>
          <div className={styles.imgBlock}>
            <img src={handShake} alt="Logo hand shake" className={styles.img} />
          </div>
        </div>
        <div className={styles.logo}>
          <div className={styles.imgBlock}>
            <img src={note} alt="Logo note" className={styles.img} />
          </div>
          <p className={styles.p}>
            <span className={styles.spanPart}>+ de 700 </span>
            <span>Offres d'emploi</span>
          </p>
        </div>
      </div>
    </div>
  );
}
