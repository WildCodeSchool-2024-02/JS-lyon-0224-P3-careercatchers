import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserContext } from "../../contexts/UserContext";

export default function LoginUser() {
  const notifySuccess = (text) => toast.success(text);
  const notifyFail = (text) => toast.error(text);
  const { setCurrentUser } = useUserContext();
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const [loginInfos, setLoginInfos] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3310/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfos),
      });

      if (response.status === 200) {
        const user = await response.json();

        setCurrentUser(user);

        console.info("Login successful:", user);
        // Redirection vers la page d'accueil après la connexion réussie
        navigate("/result-page");
        notifySuccess(`Bienvenue ${user.user.email}`);
      } else {
        const errorResponse = await response.json();
        setErrors(errorResponse.message || "Erreur de connexion.");
        notifyFail("Une erreur s'est produite");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrors("Connexion échouée. Vérifiez vos identifiants.");
    }
  };
  return (
    <div className=" flex flex-col  mx-auto max-w-sm   ">
      <div className="flex justify-center mb-20">
        <p className="font-custom text-2xl">Me connecter</p>
      </div>
      <form method="post" onSubmit={handleSubmit} className="min-w-96">
        <div className="mb-4">
          <input
            aria-required="true"
            type="email"
            id="email"
            name="email"
            value={loginInfos.email}
            onChange={(e) =>
              setLoginInfos({ ...loginInfos, email: e.target.value })
            }
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
            value={loginInfos.password}
            onChange={(e) =>
              setLoginInfos({ ...loginInfos, password: e.target.value })
            }
            placeholder="Mot de passe"
            className="w-full px-3 py-2 border font-custom rounded-md focus:outline-none focus:border-secondary focus:ring focus:ring-primary focus:ring-opacity-20"
          />
        </div>
        {errors && <div className="mb-4 text-red-600">{errors}</div>}
        <button
          type="submit"
          className="bg-primary font-custom text-white  rounded-md w-full px-3 py-2 mb-1 border"
        >
          Soumettre
        </button>
      </form>
      <p className="flex justify-end font-custom pr-2  text-gray-500">
        Pas encore de compte ?&nbsp;
        <Link to="/sign-up-page" className="underline text-primary">
          M'inscrire
        </Link>
      </p>
    </div>
  );
}
