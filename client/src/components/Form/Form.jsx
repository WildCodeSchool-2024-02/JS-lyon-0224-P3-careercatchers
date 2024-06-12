import { useState } from "react";

function Form() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [sexe, setSexe] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.info({
      prenom,
      nom,
      email,
      dateNaissance,
      sexe,
      password,
      confirmPassword,
    });
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Je suis:</h3>
          <button type="button">Candidat</button>
          <button type="button">Une Entreprise</button>
        </div>

        <label htmlFor="prenom">Prénom</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />

        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="date_naissance">Date de naissance</label>
        <input
          type="date"
          id="date_naissance"
          name="date_naissance"
          value={dateNaissance}
          onChange={(e) => setDateNaissance(e.target.value)}
        />

        <label htmlFor="sexe">Sexe</label>
        <select
          id="sexe"
          name="sexe"
          value={sexe}
          onChange={(e) => setSexe(e.target.value)}
        >
          <option value="femme">Féminin</option>
          <option value="homme">Masculin</option>
        </select>

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}

export default Form;
