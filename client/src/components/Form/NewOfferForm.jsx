import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import PostOfferAction from "../../actions/PostOfferAction";
import styles from "./NewOfferForm.module.css";

export default function NewOfferForm() {
  const navigate = useNavigate();
  const companies = useLoaderData();
  const [errors, setErrors] = useState({});
  const [offerForm, setOfferForm] = useState({
    job_title: "",
    job_type: "",
    content: "",
    location: "",
    salary_rate: "mensuel",
    min_salary: "",
    max_salary: "",
    company_id: "",
  });
  const regularPattern = /^[a-zA-ZÀ-ÿ0-9\s,'-]*$/;
  const [isChosen, setIsChosen] = useState(null);
  const [hasRead, setHasRead] = useState(false);
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);

  const handleUpdateForm = (e) => {
    const { name, value } = e.target;
    if (name === "job_type") {
      setIsChosen(value);
    }
    if (name === "min_salary" || name === "max_salary") {
      if (value !== "0") {
        setOfferForm({ ...offerForm, [name]: value });
      } else {
        setOfferForm({ ...offerForm, [name]: "" }); // Prevents '0' from being inserted in a salary field
      }
    } else {
      setOfferForm({ ...offerForm, [name]: value });
    }
    setErrors({ ...errors, [name]: undefined });
  };

  const validateForm = () => {
    const newErrors = {};

    if (offerForm.job_title === "") {
      newErrors.job_title = "Veuillez indiquer l'intitulé du poste à pourvoir.";
    } else if (offerForm.job_title.length < 3) {
      newErrors.job_title =
        "Le titre du poste doit contenir au moins 3 caractères";
    } else if (regularPattern.test(offerForm.job_title) === false) {
      newErrors.job_title =
        "Veuillez utiliser seulement des lettres et des nombres.";
    } else {
      newErrors.job_title = null;
    }

    if (offerForm.job_type === "")
      newErrors.job_type = "Choisissez un type de contrat.";
    else newErrors.job_type = null;

    if (offerForm.location === "") {
      newErrors.location = "Indiquez où se déroule le poste.";
    } else if (offerForm.location.length < 2) {
      newErrors.location = "Le lieu doit contenir au moins 2 caractères";
    } else if (regularPattern.test(offerForm.location) === false) {
      newErrors.location =
        "Veuillez utiliser seulement des lettres et des nombres.";
    } else {
      newErrors.location = null;
    }

    if (offerForm.content === "")
      newErrors.content = "Renseignez des informations à propos de l'offre.";
    else newErrors.content = null;

    if (hasRead !== true)
      newErrors.disclaimer_checkbox =
        "Confirmez avoir pris en compte la clause de non-responsabilité";

    setErrors(newErrors);
    if (Object.values(newErrors).every((value) => value === null) === true) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (offerForm.min_salary >= offerForm.max_salary) {
      // Makes sure the highest value is always asigned to 'max_salary'
      const temp = offerForm.min_salary;
      setOfferForm((prevOfferForm) => ({
        ...prevOfferForm,
        min_salary: offerForm.max_salary,
        max_salary: temp,
      }));
    }
    if (validateForm() === true) {
      await PostOfferAction(offerForm);
      navigate("/result-page");
      notifySuccess("Offre postée avec succès");
    } else {
      notifyFail("Veuillez remplir correctement les champs requis");
      toast.clearWaitingQueue();
    }
  };

  const handleCheckbox = () => {
    setHasRead(!hasRead);
  };

  const inputStyles =
    "w-full px-3 py-2 border rounded focus:outline-none focus:border-secondary focus:ring focus:ring-primary focus:ring-opacity-20";
  const invalid = "border-red-500";
  const valid = "bg-slate-100";

  const minSalaryTernary =
    offerForm.salary_rate === "mensuel" ? "Ex: 2500" : "Ex: 12";
  const maxSalaryTernary =
    offerForm.salary_rate === "mensuel" ? "Ex: 3000" : "Ex: 16";
  const inputClassTernary = (input) => {
    if (errors[input] === null) return valid;
    if (errors[input] === undefined) return "";
    return invalid;
  };

  return (
    <div className="flex justify-center">
      <form
        method="post"
        className={`px-9 ${styles.form}`}
        onSubmit={handleSubmit}
      >
        <label htmlFor="company">Vous êtes :</label>
        <br />
        <select
          name="company_id"
          id="company"
          aria-required="true"
          onChange={handleUpdateForm}
        >
          <option value="">---</option>
          {companies.map((company) => (
            <option value={company.id} key={company.id}>
              {company.name}
            </option>
          ))}
        </select>
        <br />
        <br />

        <label htmlFor="job-title">Intitulé du poste</label>
        <br />
        <input
          type="text"
          id="job-title"
          name="job_title"
          aria-required="true"
          placeholder="Ex: Développeur Web"
          autoComplete="organization-title"
          onChange={handleUpdateForm}
          className={`${inputStyles} ${inputClassTernary("job_title")}`}
        />
        {errors.job_title !== undefined ? (
          <span className="text-red-500">{errors.job_title}</span>
        ) : (
          <br />
        )}
        <br />
        <br />

        <fieldset className={styles.radioToolbar} aria-required>
          <legend>Type de contrat</legend>
          <div>
            <label htmlFor="CDI" aria-checked={isChosen === "CDI"}>
              <button
                type="button"
                name="job_type"
                id="CDI"
                value="CDI"
                onClick={handleUpdateForm}
                className={isChosen === "CDI" ? "bg-primary" : "bg-secondary"}
              >
                CDI
              </button>
            </label>
            <br />
            <label htmlFor="CDD" aria-checked={isChosen === "CDD"}>
              <button
                type="button"
                name="job_type"
                id="CDD"
                value="CDD"
                onClick={handleUpdateForm}
                className={isChosen === "CDD" ? "bg-primary" : "bg-secondary"}
              >
                CDD
              </button>
            </label>
          </div>
          <br />
          <div>
            <label
              htmlFor="Apprentissage"
              aria-checked={isChosen === "Apprentissage"}
            >
              <button
                type="button"
                name="job_type"
                id="Apprentissage"
                value="Apprentissage"
                onClick={handleUpdateForm}
                className={
                  isChosen === "Apprentissage" ? "bg-primary" : "bg-secondary"
                }
              >
                Apprentissage
              </button>
            </label>
            <label
              htmlFor="Professionnalisation"
              aria-checked={isChosen === "Professionnalisation"}
            >
              <br />
              <button
                type="button"
                name="job_type"
                id="Professionnalisation"
                value="Professionnalisation"
                onClick={handleUpdateForm}
                className={
                  isChosen === "Professionnalisation"
                    ? "bg-primary"
                    : "bg-secondary"
                }
              >
                Professionnalisation
              </button>
            </label>
          </div>
        </fieldset>
        {errors.job_type !== undefined && (
          <span className="text-red-500">{errors.job_type}</span>
        )}
        <br />
        <br />
        <label htmlFor="location">Lieu du poste</label>
        <br />
        <input
          type="text"
          id="location"
          name="location"
          aria-required="true"
          placeholder="Ex: Lyon"
          autoComplete="address-level2"
          onChange={handleUpdateForm}
          className={`${inputStyles} ${inputClassTernary("location")}`}
        />
        {errors.location !== undefined ? (
          <span className="text-red-500">{errors.location}</span>
        ) : (
          <br />
        )}
        <br />
        <br />

        <label htmlFor="content">Description de l'offre</label>
        <br />
        <textarea
          className={`min-h-32 ${inputStyles} ${inputClassTernary("content")}`}
          id="content"
          name="content"
          aria-required="true"
          placeholder="Décrire les missions, les prérequis, avantages sociaux, etc"
          maxLength="500"
          onChange={handleUpdateForm}
        />
        {errors.content !== undefined ? (
          <span className="text-red-500">{errors.content}</span>
        ) : (
          <br />
        )}
        <br />
        <br />

        <fieldset>
          <div className={`flex ${styles.salaryHeader}`}>
            <legend>Fourchette de rémunération</legend>
            <select
              name="salary_rate"
              id="salary_rate"
              aria-label="Taux du salaire"
              onChange={handleUpdateForm}
              className="mx-1"
            >
              <option value="mensuel">mensuelle</option>
              <option value="annuel">annuelle</option>
              <option value="horaire">horaire</option>
            </select>{" "}
            (facultatif)
          </div>
          <div className="flex">
            <div className="text-center">
              <label htmlFor="min_salary" className={styles.salaryLabel}>
                Salaire minimum (en €)
              </label>
              <input
                className={`text-center w-24 ${inputStyles}`}
                type="number"
                id="min_salary"
                name="min_salary"
                min="0"
                max="999 999"
                step="1000"
                placeholder={
                  offerForm.salary_rate === "annuel"
                    ? "Ex: 30000"
                    : minSalaryTernary
                }
                value={offerForm.min_salary}
                onChange={handleUpdateForm}
              />
            </div>
            <div className="text-center">
              <label htmlFor="max_salary" className={styles.salaryLabel}>
                Salaire maximum (en €)
              </label>
              <input
                className={`text-center w-24 ${inputStyles}`}
                type="number"
                id="max_salary"
                name="max_salary"
                min="0"
                max="999 999"
                step="1000"
                placeholder={
                  offerForm.salary_rate === "annuel"
                    ? "Ex: 40000"
                    : maxSalaryTernary
                }
                value={offerForm.max_salary}
                onChange={handleUpdateForm}
              />
            </div>
          </div>
        </fieldset>
        <br />
        <br />

        <div className="border-2 border-primary rounded-lg py-2 px-4">
          <p className="text-center py-1">
            <strong>Attention</strong>
          </p>
          <p className="pb-2">
            En cas d’infraction, le rédacteur de l’offre d’emploi s’expose à des
            sanctions pénales et civiles.
          </p>
          <p className="pb-2">
            Selon l’article{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006903806"
              target="_blank"
              rel="noreferrer"
              className="text-primary text-lg"
            >
              L.5334-1
            </a>{" "}
            du Code du Travail, le contrevenant peut être condamné à une amende
            de
            <span className="font-medium"> 37 500 euros</span> et à
            <span className="font-medium"> un an d’emprisonnement </span>en cas
            de mentions interdites dans une offre d’emploi, d’absence de
            datation de l’annonce ou s’il monnaye la réponse à l’offre d’emploi
            en exigeant de l’argent aux candidats pour qu’ils puissent postuler.
          </p>
          <p>
            En publiant une offre d'emploi, vous vous engagez à respecter toutes
            les lois et réglementations applicables.
          </p>
          <br />
          <label>
            <input
              type="checkbox"
              aria-required="true"
              name="disclaimer_checkbox"
              onChange={handleCheckbox}
            />{" "}
            J'ai lu et j'accepte
          </label>
        </div>
        {hasRead === false && (
          <span className="text-red-500">
            Confirmez avoir pris en compte la clause de non-responsabilité
          </span>
        )}
        <br />
        <br />
        <div className="flex justify-end">
          <button
            type="submit"
            className="mb-5 px-2 py-1 rounded bg-primary text-white self-end"
          >
            Poster l'offre
          </button>
        </div>
      </form>
    </div>
  );
}
