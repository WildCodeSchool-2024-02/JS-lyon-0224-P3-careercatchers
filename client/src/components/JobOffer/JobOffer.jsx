/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable no-constant-condition */
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
import styles from "./JobOffer.module.css";
// import Heart from "../../assets/logo/heart.svg";

export default function JobOffer({
  jobTitle,
  content,
  location,
  salaryRate,
  minSalary,
  maxSalary,
  jobType,
  publishDate,
}) {
  const createdAt = new Date(publishDate);
  const replacements = {
    day: "jour",
    hour: "heure",
    ago: "",
    about: "environ",
    "less than a": "moins d'une",
    months: "mois",
    month: "mois",
  };
  const regex = new RegExp(Object.keys(replacements).join("|"), "gi");

  const frenchDate = formatDistanceToNow(createdAt).replace(
    regex,
    (matched) => replacements[matched]
  );
  const rate = (salaryRate = "annuel"
    ? "an"
    : (salaryRate = "mensuel" ? "mois" : "heure"));
  return (
    <div className="flex flex-col items-center ">
      <div className={styles.divJobOffer}>
        <h2 className={styles.title}>{jobTitle}</h2>
        {/*           <img
            className={styles.logoHeart}
            src={Heart}
            alt="Ajouter l'offre aux favoris"
          /> */}
        <p className={styles.adress}>{location}</p>
        <p className={styles.content}>{content}</p>
        <div className={styles.bubbles}>
          {(minSalary !== null || maxSalary !== null) && (
            <p className={styles.jobSalary}>
              {minSalary} - {maxSalary}€ par {rate}
            </p>
          )}
          <p className={styles.contract}>{jobType}</p>
        </div>
        <p className={styles.date}>{`Offre postée il y a ${frenchDate}`}</p>
      </div>
    </div>
  );
}

JobOffer.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  salaryRate: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  minSalary: PropTypes.number,
  // eslint-disable-next-line react/require-default-props
  maxSalary: PropTypes.number,
  jobType: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
};
