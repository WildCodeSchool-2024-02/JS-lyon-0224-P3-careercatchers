import { Form, useLoaderData } from "react-router-dom";

export default function PostNewOffer() {
  const companies = useLoaderData();

  return (
    <Form method="post" className="pl-6">
      <label htmlFor="company">Vous êtes :</label>
      <br />
      <select name="company.id" id="company" required>
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
        required
        placeholder="Ex: Développeur Web"
      />
      <br />
      <br />

      <fieldset>
        <legend>Type de contrat</legend>
        <input type="radio" name="job_type" id="CDI" value="CDI" required />
        <label htmlFor="CDI">CDI</label>
        <br />
        <input type="radio" name="job_type" id="CDD" value="CDD" required />
        <label htmlFor="CDD">CDD</label>
        <br />
        <input
          type="radio"
          name="job_type"
          id="Alternance"
          value="Alternance"
          required
        />
        <label htmlFor="Alternance">Alternance</label>
      </fieldset>
      <br />
      <br />

      <label htmlFor="localisation">Lieu du poste</label>
      <br />
      <input
        type="text"
        id="localisation"
        name="localisation"
        required
        placeholder="Ex: Lyon"
      />
      <br />
      <br />

      <label htmlFor="content">Description de l'offre</label>
      <br />
      <textarea
        className="min-h-32 min-w-96"
        id="content"
        name="content"
        required
        placeholder="Décrire les missions, les prérequis, etc"
        maxLength="500"
      />
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
        />
        €
      </fieldset>
      <br />
      <br />

      <input type="submit" value="Submit" />
    </Form>
  );
}
