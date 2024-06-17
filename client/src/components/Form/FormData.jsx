import { useState } from "react";
import { Form, useActionData } from "react-router-dom";

// const ApiUrl = import.meta.env.VITE_API_URL;

function FormData() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const actionData = useActionData();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  // }
  // const formData = {
  //   email,
  //   password,
  // };

  //   try {
  //     const response = await fetch(`${ApiUrl}/user/signup`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     // Redirection ou message de succès ici après l'inscription réussie
  //     console.info("User signed up successfully!");

  //     // Exemple de redirection vers une autre page après l'inscription
  //     // window.location.href = "/dashboard";
  //   } catch (error) {
  //     console.error("Fetch error:", error);
  //     // Gérer l'affichage d'un message d'erreur à l'utilisateur ici si nécessaire
  //   }
  // };

  return (
    <div className="container-form">
      <Form method="post">
        <label htmlFor="email">E-mail</label>
        <input
          aria-required="true"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

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

        <button type="submit">Soumettre</button>
      </Form>
      {actionData?.error && <p className="error-message">{actionData.error}</p>}
    </div>
  );
}

export default FormData;
