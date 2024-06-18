import { Form } from "react-router-dom";

export default function PostNewOffer() {
  return (
    <Form method="post" className="pl-6">
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

      <label htmlFor="job-type">Type de contrat</label>
      <br />
      <select id="job-type" name="job_type" required>
        <option value="CDI">CDI</option>
        <option value="CDD">CDD</option>
        <option value="Alternance">Alternance</option>
      </select>
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

      <input type="submit" value="Submit" />
    </Form>
  );
}
