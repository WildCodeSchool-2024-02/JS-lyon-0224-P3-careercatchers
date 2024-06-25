import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import PostOfferAction from "../../actions/PostOfferAction";

export default function NewOfferForm() {
  const navigate = useNavigate();
  const companies = useLoaderData();
  const [errors, setErrors] = useState({});
  const [offerForm, setOfferForm] = useState({
    job_title: "",
    job_type: "",
    content: "",
    location: "",
    salary_rate: "annuel",
    min_salary: "",
    max_salary: "",
    company_id: "",
  });
  const regularPattern = /^[a-zA-ZÀ-ÿ0-9\s,'-]*$/;
  const [hasRead, setHasRead] = useState(null);

  const handleUpdateForm = (e) => {
    const { name, value } = e.target;
    if (name === "min_salary" || name === "max_salary") {
      if (value !== "0") {
        setOfferForm({ ...offerForm, [name]: value });
      } else {
        setOfferForm({ ...offerForm, [name]: "" }); // Prevents '0' from being inserted in a salary field
      }
    } else {
      setOfferForm({ ...offerForm, [name]: value });
    }
    setErrors({ ...errors, [name]: "" });
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
    }

    if (offerForm.job_type === "")
      newErrors.job_type = "Choisissez un type de contrat.";

    if (offerForm.location === "") {
      newErrors.location = "Indiquez où se déroule le poste.";
    } else if (offerForm.location.length < 2) {
      newErrors.location = "Le lieu doit contenir au moins 2 caractères";
    } else if (regularPattern.test(offerForm.location) === false) {
      newErrors.location =
        "Veuillez utiliser seulement des lettres et des nombres.";
    }

    if (offerForm.content === "")
      newErrors.content = "Renseignez des informations à propos de l'offre.";

    if (hasRead !== true)
      newErrors.disclaimer_checkbox =
        "Confirmez avoir pris en compte la clause de non-responsabilité";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
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
    }
  };

  const handleCheckbox = () => {
    if (hasRead === null) {
      setHasRead(true);
    } else {
      setHasRead(!hasRead);
    }
  };

  return (
    <form method="post" className="pl-6" onSubmit={handleSubmit}>
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
      />
      {errors.job_title !== undefined && (
        <span className="text-red-500">
          <br />
          {errors.job_title}
        </span>
      )}
      <br />
      <br />

      <fieldset>
        <legend>Type de contrat</legend>
        <input
          type="radio"
          name="job_type"
          id="CDI"
          value="CDI"
          onChange={handleUpdateForm}
        />
        <label htmlFor="CDI">CDI</label>
        <br />
        <input
          type="radio"
          name="job_type"
          id="CDD"
          value="CDD"
          onChange={handleUpdateForm}
        />
        <label htmlFor="CDD">CDD</label>
        <br />
        <input
          type="radio"
          name="job_type"
          id="Apprentissage"
          value="Apprentissage"
          onChange={handleUpdateForm}
        />
        <label htmlFor="Apprentissage">Apprentissage</label>
        <br />
        <input
          type="radio"
          name="job_type"
          id="Professionnalisation"
          value="Professionnalisation"
          onChange={handleUpdateForm}
        />
        <label htmlFor="Professionnalisation">Professionnalisation</label>
        {errors.job_type !== undefined && (
          <span className="text-red-500">
            <br />
            {errors.job_type}
          </span>
        )}
      </fieldset>
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
      />
      {errors.location !== undefined && (
        <span className="text-red-500">
          <br />
          {errors.location}
        </span>
      )}
      <br />
      <br />

      <label htmlFor="content">Description de l'offre</label>
      <br />
      <textarea
        className="min-h-32 min-w-96"
        id="content"
        name="content"
        aria-required="true"
        placeholder="Décrire les missions, les prérequis, etc"
        maxLength="500"
        onChange={handleUpdateForm}
      />
      {errors.content !== undefined && (
        <span className="text-red-500">
          <br />
          {errors.content}
        </span>
      )}
      <br />
      <br />

      <fieldset>
        <div className="flex">
          <legend>Fourchette de rémunération (facultatif)</legend>
          <select
            name="salary_rate"
            id="salary_rate"
            aria-label="Taux du salaire"
            onChange={handleUpdateForm}
          >
            <option value="annuel">annuel</option>
            <option value="mensuel">mensuel</option>
            <option value="horaire">horaire</option>
          </select>
        </div>
        <br />
        <label htmlFor="min_salary">Salaire minimum:</label>
        <input
          className="text-right"
          type="number"
          id="min_salary"
          name="min_salary"
          min="0"
          max="999 999"
          step="1000"
          placeholder={
            // eslint-disable-next-line no-nested-ternary
            offerForm.salary_rate === "annuel"
              ? "Ex: 30000"
              : offerForm.salary_rate === "mensuel"
                ? "Ex: 2500"
                : "Ex: 12"
          }
          value={offerForm.min_salary}
          onChange={handleUpdateForm}
        />
        €<br />
        <label htmlFor="max_salary">Salaire maximum:</label>
        <input
          className="text-right"
          type="number"
          id="max_salary"
          name="max_salary"
          min="0"
          max="999 999"
          step="1000"
          placeholder={
            // eslint-disable-next-line no-nested-ternary
            offerForm.salary_rate === "annuel"
              ? "Ex: 40000"
              : offerForm.salary_rate === "mensuel"
                ? "Ex: 3000"
                : "Ex: 16"
          }
          value={offerForm.max_salary}
          onChange={handleUpdateForm}
        />
        €
      </fieldset>
      <br />
      <br />

      <div>
        <strong>Attention :</strong> En cas d’infraction, le rédacteur de
        l’offre d’emploi s’expose à des sanctions pénales et civiles. Selon
        l’article{" "}
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006903806"
          target="_blank"
          rel="noreferrer"
          className="text-primary"
        >
          L.5334-1
        </a>{" "}
        du Code du Travail, le contrevenant peut être condamné à une amende de
        37 500 euros et à un an d’emprisonnement en cas de mentions interdites
        dans une offre d’emploi, d’absence de datation de l’annonce ou s’il
        monnaye la réponse à l’offre d’emploi en exigeant de l’argent aux
        candidats pour qu’ils puissent postuler. En publiant une offre d'emploi,
        vous vous engagez à respecter toutes les lois et réglementations
        applicables.
      </div>
      <label>
        <input
          type="checkbox"
          aria-required="true"
          name="disclaimer_checkbox"
          onChange={handleCheckbox}
        />{" "}
        J'ai lu et j'accepte
      </label>
      <span
        className={`${errors.disclaimer_checkbox !== undefined ? "text-red-500" : "text-black"}`}
      >
        <br />
        Confirmez avoir pris en compte la clause de non-responsabilité
      </span>
      <br />

      <button type="submit" className="pb-5" onClick={handleSubmit}>
        Poster l'offre
      </button>
    </form>
  );
}
