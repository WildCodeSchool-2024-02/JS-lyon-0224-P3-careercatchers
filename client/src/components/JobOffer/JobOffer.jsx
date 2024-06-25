import { useLoaderData } from "react-router-dom";

import Heart from "../../assets/logo/heart.svg";
import styles from "./JobOffer.module.css";

export default function JobOffer() {
  const offers = useLoaderData();

  return (
    <div className="flex-col ">
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
