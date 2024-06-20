import { useState } from "react";
import { Form } from "react-router-dom";

function SignUpForm() {
  const [register, setRegister] = useState({
    lastname: "",
    firstname: "",
    email: "",
    birthday: "",
    sex: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleUpdateForm = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (register.firstname === "")
      newErrors.firstname = "Le prénom est requis.";
    if (register.lastname === "") newErrors.lastname = "Le nom est requis.";
    if (register.email === "") newErrors.email = "L'e-mail est requis.";
    if (register.birthday === "")
      newErrors.birthday = "La date de naissance est requise.";
    if (register.sex === "") newErrors.sex = "Le sexe est requis.";
    if (register.password === "")
      newErrors.password = "Le mot de passe est requis.";
    if (register.password !== register.confirmPassword)
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  const inputStyles =
    "w-full px-3 py-2 border rounded focus:outline-none focus:border-secondary focus:ring focus:ring-primary focus:ring-opacity-20";
  return (
    <div className=" flex flex-col w-5/6 mx-auto max-w-sm ">
      <Form method="post" onSubmit={handleSubmit}>
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
            className={`${inputStyles} ${errors.firstname ? "border-red-500" : ""}`}
          />

          {errors.firstname && (
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
            className={`${inputStyles} ${
              errors.lastname ? "border-red-500" : ""
            }`}
          />
          {errors.lastname && <p className="text-red-500">{errors.lastname}</p>}
        </div>
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
            className={`${inputStyles}${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
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
            className={`${inputStyles}${
              errors.birthday ? "border-red-500" : ""
            }`}
          />
        </div>
        {errors.birthday && <p className="text-red-500">{errors.birthday}</p>}
        <div className="mb-4">
          <label htmlFor="sex" className="block text-gray-500">
            Sexe
          </label>
          <select
            aria-required="true"
            aria-describedby="sexDescribe"
            id="sex"
            name="sex"
            value={register.sex}
            onChange={handleUpdateForm}
            className={`${inputStyles} ${errors.sex ? "border-red-500" : ""}`}
          >
            <option value="femme">{}</option>
            <option value="femme">Féminin</option>
            <option value="homme">Masculin</option>
          </select>
          {errors.sex && <p className="text-red-500">{errors.sex}</p>}
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
            className={`${inputStyles}  ${errors.password ? "border-red-500" : ""}`}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
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
            className={`${inputStyles}
              ${errors.confirmPassword ? "border-red-500" : ""}`}
          />

          {errors.confirmPassword && (
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
      </Form>
    </div>
  );
}

export default SignUpForm;
