import { useState } from "react";
import { Form, Link } from "react-router-dom";

export default function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className=" flex flex-col  mx-auto max-w-sm   ">
      <div className="flex justify-center mb-20">
        <p className="font-custom text-2xl">Me connecter</p>
      </div>
      <Form method="post" className="min-w-96">
        <div className="mb-4">
          <input
            aria-required="true"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-md font-custom focus:outline-none focus:border-secondary focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>
        <div className="mb-20">
          <input
            autoComplete="new-password"
            aria-required="true"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            className="w-full px-3 py-2 border font-custom rounded-md focus:outline-none focus:border-secondary focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>

        <button
          type="submit"
          className="bg-primary font-custom text-white  rounded-md w-full px-3 py-2 mb-1 border"
        >
          Soumettre
        </button>
      </Form>
      <p className="flex justify-end font-custom pr-2  text-gray-500">
        Pas encore de compte ?&nbsp;
        <Link to="/sign-up-page" className="underline text-primary">
          M'inscrire
        </Link>
      </p>
    </div>
  );
}
