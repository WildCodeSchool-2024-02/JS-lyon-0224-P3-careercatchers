import { redirect } from "react-router-dom";

const ApiUrl = import.meta.env.VITE_API_URL;

const signUpAction = async ({ request }) => {
  try {
    const formData = await request.formData();

    const email = formData.get("email");
    const password = formData.get("password");
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const birthDay = formData.get("birthDay");
    const sex = formData.get("sex");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      throw new Error("Les mots de passe ne correspondent pas.");
    }

    const response = await fetch(`${ApiUrl}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        firstname,
        lastname,
        birthDay,
        sex,
      }),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'inscription");
    }
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
  return redirect("/result-page");
};

export default signUpAction;
