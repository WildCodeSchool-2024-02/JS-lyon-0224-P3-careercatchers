import { redirect } from "react-router-dom";

const ApiUrl = import.meta.env.VITE_API_URL;

const signUpAction = async ({ request }) => {
  try {
    const formData = await request.formData();

    const email = formData.get("email");
    const password = formData.get("password");
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const birthday = formData.get("birthday");

    console.info("Sending data for user:", { email, password });
    console.info("Sending data for candidate:", {
      firstname,
      lastname,
      birthday,
    });

    const response = await fetch(`${ApiUrl}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    const responseCandidate = await fetch(`${ApiUrl}/api/candidates`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        firstname,
        lastname,
        birthday,
      }),
    });
    if (!responseCandidate.ok) {
      throw new Error("Failed to create candidate");
    }
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
  return redirect("/result-page");
};

export default signUpAction;
