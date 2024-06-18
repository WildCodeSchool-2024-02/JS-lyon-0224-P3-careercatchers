import { useState } from "react";
import { Form } from "react-router-dom";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [sex, setSex] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className=" flex flex-col w-5/6 mx-auto max-w-sm ">
      <Form method="post">
        <div className="my-4 min-w-96">
          <h3 className=" text-xl font-custom mx-2 my-6">Je suis :</h3>
          <div className="flex justify-evenly">
            <button
              type="button"
              className="bg-primary font-custom text-white px-4 py-2 rounded w-32 "
            >
              Candidat
            </button>
            <button
              type="button"
              className="bg-primary font-custom text-white  rounded w-32"
            >
              Une Entreprise
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-500">
            Prénom
          </label>
          <input
            aria-required="true"
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-secondary focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nom" className="block text-gray-500">
            Nom
          </label>
          <input
            aria-required="true"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-secondary focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-500">
            E-mail
          </label>
          <input
            aria-required="true"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-secondary focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date_naissance" className="block text-gray-500">
            Date de naissance
          </label>
          <input
            aria-required="true"
            type="date"
            id="date_naissance"
            name="date_naissance"
            value={birthDay}
            onChange={(e) => setBirthDay(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-secondary focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sexe" className="block text-gray-500">
            Sexe
          </label>
          <select
            aria-required="true"
            id="sexe"
            name="sexe"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-secondary focus:ring focus:ring-primary focus:ring-opacity-20"
          >
            <option value="femme">Féminin</option>
            <option value="homme">Masculin</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-500">
            Mot de passe
          </label>
          <input
            autoComplete="new-password"
            aria-required="true"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-secondary focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-500">
            Confirmer le mot de passe
          </label>
          <input
            aria-required="true"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-secondary focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary font-custom text-white px-3 py-2 rounded"
          >
            Soumettre
          </button>
        </div>
      </Form>
    </div>
  );
}

export default SignUpForm;
