import Heart from "../assets/logo/heart.svg";
import styles from "./jobOffer.module.css";

export default function JobOffer() {
  return (
    <div className={styles.divJobOffer}>
      <div className={styles.head}>
        <h2 className={styles.title}>Titre poste</h2>
        <img className={styles.logoHeart} src={Heart} alt="Logo coeur" />
      </div>
      <p className={styles.adress}>Adresse entreprise</p>
      <p className={styles.jobSalary}>Salaire proposé entreprise</p>
      <p className={styles.contract}>Type de contrat</p>
      <div className={styles.date}>
        <p>Date de mise en ligne de l'offre</p>
      </div>
    </div>
  );
}
