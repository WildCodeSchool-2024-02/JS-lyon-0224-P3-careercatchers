import Heart from "../assets/logo/heart.svg";
import styles from "./jobOffer.module.css";

export default function JobOffer() {
  return (
    <div className={styles.divJobOffer}>
      <p>Titre poste</p>
      <img src={Heart} alt="Logo coeur" />
      <p>Adresse entreprise</p>
      <p>salaire proposé entreprise</p>
      <p>type de contrat</p>
      <p>Date de mise en ligne de l'offre</p>
    </div>
  );
}
