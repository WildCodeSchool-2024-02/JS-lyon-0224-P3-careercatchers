import { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";

export default function NewOfferForm() {
  const companies = useLoaderData();
  const [errors, setErrors] = useState({});
  const [offerForm, setOfferForm] = useState({
    job_title: "",
    job_type: "",
    content: "",
    location: "",
    min_salary: "",
    max_salary: "",
    company_id: "",
  });
  const regularPattern = /^[a-zA-ZÀ-ÿ0-9\s,'-]*$/;

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
    } else if (regularPattern.test(offerForm.job_title) === false) {
      newErrors.job_title =
        "Veuillez utiliser seulement des lettres et des nombres.";
    }

    if (offerForm.job_type === "")
      newErrors.job_type = "Choisissez un type de contrat.";

    if (offerForm.location === "") {
      newErrors.location = "Indiquez où se déroule le poste.";
    } else if (regularPattern.test(offerForm.location) === false) {
      newErrors.location =
        "Veuillez utiliser seulement des lettres et des nombres.";
    }

    if (offerForm.content === "")
      newErrors.content = "Renseignez des informations à propos de l'offre.";

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (offerForm.min_salary >= offerForm.max_salary) {
      // Makes sure the highest value is always asigned to 'max_salary'
      const temp = offerForm.min_salary;
      setOfferForm((prevOfferForm) => ({
        ...prevOfferForm,
        min_salary: offerForm.max_salary,
        max_salary: temp,
      }));
    }
  };

  return (
    <Form method="post" className="pl-6" onSubmit={handleSubmit}>
      <label htmlFor="company">Vous êtes :</label>
      <br />
      <select name="company.id" id="company" aria-required="true">
        <option value="">---</option>
        {companies.map((company) => (
          <option value={company.id} key={company.id}>
            {company.name}
          </option>
        ))}
      </select>
      <br />
      <br />

      <label htmlFor="job-title">Intitulé du poste (requis)</label>
      <br />
      <input
        type="text"
        id="job-title"
        name="job_title"
        aria-required="true"
        placeholder="Ex: Développeur Web"
        onChange={handleUpdateForm}
      />
      {errors.job_title && (
        <span className="text-red-500">
          <br />
          {errors.job_title}
        </span>
      )}
      <br />
      <br />

      <fieldset>
        <legend>Type de contrat (requis)</legend>
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
          id="Alternance"
          value="Alternance"
          onChange={handleUpdateForm}
        />
        <label htmlFor="Alternance">Alternance</label>
        {errors.job_type && (
          <span className="text-red-500">
            <br />
            {errors.job_type}
          </span>
        )}
      </fieldset>
      <br />

      <label htmlFor="location">Lieu du poste (requis)</label>
      <br />
      <input
        type="text"
        id="location"
        name="location"
        minLength="2"
        aria-required="true"
        placeholder="Ex: Lyon"
        onChange={handleUpdateForm}
      />
      {errors.location && (
        <span className="text-red-500">
          <br />
          {errors.location}
        </span>
      )}
      <br />
      <br />

      <label htmlFor="content">Description de l'offre (requis)</label>
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
      {errors.content && (
        <span className="text-red-500">
          <br />
          {errors.content}
        </span>
      )}
      <br />
      <br />

      <fieldset>
        <legend>Fourchette de rémunération</legend>
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
          placeholder="Ex: 30 000"
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
          placeholder="Ex: 40 000"
          value={offerForm.max_salary}
          onChange={handleUpdateForm}
        />
        €
      </fieldset>
      <br />
      <br />

      <button type="submit" className="pb-5">
        Poster l'offre
      </button>
    </Form>
  );
}
