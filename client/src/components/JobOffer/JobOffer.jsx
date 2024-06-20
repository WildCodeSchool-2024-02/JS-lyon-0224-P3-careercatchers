import { useLoaderData } from "react-router-dom";

import Heart from "../../assets/logo/heart.svg";
import styles from "./JobOffer.module.css";

export default function JobOffer() {
  const offers = useLoaderData();
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
          <p className={styles.adress}>
            {offer.localisation} {offer.name}
          </p>
          <p className={styles.jobSalary}>coucou</p>
          <p className={styles.contract}>{offer.job_type}</p>
          <div className={styles.date}>
            <p>Date de mise en ligne de l'offre</p>
          </div>
        </div>
      ))}
    </div>
  );
}
