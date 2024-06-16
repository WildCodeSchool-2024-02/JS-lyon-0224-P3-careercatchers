import { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [sexe, setSexe] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.info({
      firstName,
      name,
      email,
      birthDay,
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

        <label htmlFor="firstName">Prénom</label>
        <input
          aria-required="true"
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="nom">Nom</label>
        <input
          aria-required="true"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">E-mail</label>
        <input
          aria-required="true"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="date_naissance">Date de naissance</label>
        <input
          aria-required="true"
          type="date"
          id="date_naissance"
          name="date_naissance"
          value={birthDay}
          onChange={(e) => setBirthDay(e.target.value)}
        />

        <label htmlFor="sexe">Sexe</label>
        <select
          aria-required="true"
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
          autoComplete="new-password"
          aria-required="true"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
        <input
          aria-required="true"
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
