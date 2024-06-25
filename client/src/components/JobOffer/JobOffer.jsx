import { useLoaderData } from "react-router-dom";

import Heart from "../../assets/logo/heart.svg";
import styles from "./JobOffer.module.css";

export default function JobOffer() {
  const offers = useLoaderData();

  if (offers !== undefined) {
    return <p>Chargement en cours...</p>;
  }

  // Vérifie si offers n'est pas un tableau
  if (Array.isArray(offers) !== undefined) {
    return <p>Erreur : les données d'offres ne sont pas valides.</p>;
  }

  return (
    <div className="flex  ">
      {offers.map((offer) => (
        <div key={offer.id} className={styles.divJobOffer}>
          <div className={styles.head}>
            <h2 className={styles.title}>{offer.job_title}</h2>
            <img
              className={styles.logoHeart}
              src={Heart}
              alt="Ajouter l'offre aux favoris"
            />
          </div>
          <p className={styles.name}>{offer.name}</p>
          <p className={styles.adress}>{offer.location}</p>
          {(offer.min_salary !== null || offer.max_salary !== null) && (
            <p className={styles.jobSalary}>
              {offer.min_salary} - {offer.max_salary}
            </p>
          )}
          <p className={styles.contract}>{offer.job_type}</p>
        </div>
      ))}
    </div>
  );
}
