import PropTypes from "prop-types";

import Heart from "../../assets/logo/heart.svg";
import styles from "./JobOffer.module.css";

export default function JobOffer({
  jobTitle,
  name,
  location,
  minSalary,
  maxSalary,
  jobType,
}) {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className={styles.divJobOffer}>
        <div className={styles.head}>
          <h2 className={styles.title}>{jobTitle}</h2>
          <img
            className={styles.logoHeart}
            src={Heart}
            alt="Ajouter l'offre aux favoris"
          />
        </div>
        <p className={styles.name}>{name}</p>
        <p className={styles.adress}>{location}</p>
        {(minSalary !== null || maxSalary !== null) && (
          <p className={styles.jobSalary}>
            {minSalary} - {maxSalary}
          </p>
        )}
        <p className={styles.contract}>{jobType}</p>
      </div>
    </div>
  );
}

JobOffer.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  minSalary: PropTypes.number.isRequired,
  maxSalary: PropTypes.number.isRequired,
  jobType: PropTypes.string.isRequired,
};
