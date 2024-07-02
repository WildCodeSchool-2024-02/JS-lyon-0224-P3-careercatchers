import { useState } from "react";
import { useNavigate } from "react-router-dom";

import signUpAction from "./actionSignUp";

function SignUpForm() {
  const navigate = useNavigate();
  const [role, setRole] = useState("candidate");
  const [register, setRegister] = useState({
    email: "",
    password: "",
    role: "candidate",
    lastname: "",
    firstname: "",
    birthday: "",
    name: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleUpdateForm = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateFormCandidate = () => {
    const newErrors = {};
    if (register.firstname === "")
      newErrors.firstname = "Le prénom est requis.";
    if (register.lastname === "") newErrors.lastname = "Le nom est requis.";
    if (register.email === "") newErrors.email = "L'e-mail est requis.";
    if (register.birthday === "")
      newErrors.birthday = "La date de naissance est requise.";
    if (register.password === "")
      newErrors.password = "Le mot de passe est requis.";
    if (register.password !== register.confirmPassword)
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      return true;
    }
    return false;
  };

  const validateFormCompany = () => {
    const newErrors = {};
    if (register.name === "") newErrors.name = "Le nom est requis.";
    if (register.email === "") newErrors.email = "L'e-mail est requis.";
    if (register.password === "")
      newErrors.password = "Le mot de passe est requis.";
    if (register.password !== register.confirmPassword)
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (register.role === "candidate") {
      const validation = validateFormCandidate();
      if (validation === true) {
        const formData = new FormData(event.target);
        const request = {
          formData: async () => formData,
        };

        await signUpAction({ request });
        navigate("/login-page");
      }
    } else {
      const validation = validateFormCompany();
      if (validation === true) {
        const formData = new FormData(event.target);
        const request = {
          formData: async () => formData,
        };

        await signUpAction({ request });
        navigate("/login-page");
      }
    }
  };

  const handleClick = (e) => {
    const { name, value } = e.target;
    setRole(value);
    setRegister({ ...register, [name]: value });
  };

  const inputStyles =
    "w-full px-3 py-2 border rounded focus:outline-none focus:border-secondary focus:ring focus:ring-primary focus:ring-opacity-20";
  const errorClass = "border-red-500";

  return (
    <div className="flex flex-col w-5/6 mx-auto max-w-sm">
      <form onSubmit={handleSubmit}>
        <div className="my-4 min-w-96">
          <h3 className="text-xl font-custom mx-2 my-6">Je suis :</h3>
          <div>
            <fieldset className="flex justify-evenly">
              <input type="hidden" name="role" value={role} />
              <label htmlFor="candidate">
                <button
                  type="button"
                  name="role"
                  value="candidate"
                  id="candidate"
                  className={`${role === "candidate" ? "bg-primary" : "bg-secondary"} font-custom text-white px-4 py-2 rounded w-32`}
                  onClick={handleClick}
                >
                  Candidat
                </button>
              </label>
              <label htmlFor="company">
                <button
                  type="button"
                  name="role"
                  value="company"
                  id="company"
                  className={`${role === "company" ? "bg-primary" : "bg-secondary"} font-custom text-white px-4 py-2 rounded w-32`}
                  onClick={handleClick}
                >
                  Entreprise
                </button>
              </label>
            </fieldset>
          </div>
        </div>
        {register.role === "candidate" ? (
          <div>
            <div className="mb-4">
              <label htmlFor="firstname" className="block text-gray-500">
                Prénom
              </label>
              <input
                aria-required="true"
                aria-describedby="firstNameDescribe"
                type="text"
                id="firstname"
                name="firstname"
                value={register.firstname}
                onChange={handleUpdateForm}
                className={`${inputStyles} ${errors.firstname !== undefined ? errorClass : ""}`}
              />
              {errors.firstname !== undefined && (
                <p className="text-red-500">{errors.firstname}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="lastname" className="block text-gray-500">
                Nom
              </label>
              <input
                aria-required="true"
                aria-describedby="lastnameDescribe"
                type="text"
                id="lastname"
                name="lastname"
                value={register.lastname}
                onChange={handleUpdateForm}
                className={`${inputStyles} ${errors.lastname !== undefined ? errorClass : ""}`}
              />
              {errors.lastname !== undefined && (
                <p className="text-red-500">{errors.lastname}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="birthday" className="block text-gray-500">
                Date de naissance
              </label>
              <input
                aria-required="true"
                aria-describedby="birthdayDescribe"
                type="date"
                id="birthday"
                name="birthday"
                value={register.birthday}
                onChange={handleUpdateForm}
                className={`${inputStyles} ${errors.birthday !== undefined ? errorClass : ""}`}
              />
              {errors.birthday !== undefined && (
                <p className="text-red-500">{errors.birthday}</p>
              )}
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-500">
              Nom
            </label>
            <input
              aria-required="true"
              aria-describedby="nameDescribe"
              type="text"
              id="name"
              name="name"
              value={register.name}
              onChange={handleUpdateForm}
              className={`${inputStyles} ${errors.name !== undefined ? errorClass : ""}`}
            />
            {errors.name !== undefined && (
              <p className="text-red-500">{errors.name}</p>
            )}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-500">
            E-mail
          </label>
          <input
            aria-required="true"
            aria-describedby="emailDescribe"
            type="email"
            id="email"
            name="email"
            value={register.email}
            onChange={handleUpdateForm}
            className={`${inputStyles} ${errors.email !== undefined ? errorClass : ""}`}
          />
          {errors.email !== undefined && (
            <p className="text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-500">
            Mot de passe
          </label>
          <input
            autoComplete="password"
            aria-required="true"
            aria-describedby="passwordDescribe"
            type="password"
            id="password"
            name="password"
            value={register.password}
            onChange={handleUpdateForm}
            className={`${inputStyles} ${errors.password !== undefined ? errorClass : ""}`}
          />
          {errors.password !== undefined && (
            <p className="text-red-500">{errors.password}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-500">
            Confirmer le mot de passe
          </label>
          <input
            aria-required="true"
            aria-describedby="confirmPasswordDescribe"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={register.confirmPassword}
            onChange={handleUpdateForm}
            className={`${inputStyles} ${errors.confirmPassword !== undefined ? errorClass : ""}`}
          />
          {errors.confirmPassword !== undefined && (
            <p className="text-red-500">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary font-custom text-white px-3 py-2 rounded"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
