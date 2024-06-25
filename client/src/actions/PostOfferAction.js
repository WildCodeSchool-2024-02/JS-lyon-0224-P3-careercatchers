import { redirect } from "react-router-dom";

const ApiUrl = import.meta.env.VITE_API_URL;

export default async function PostOfferAction(offerForm) {
  try {
    const response = await fetch(`${ApiUrl}/api/offers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(offerForm),
    });
    if (response.ok !== true) {
      // response.status !== 201
      throw new Error("Erreur lors de l'inscription");
    }
    return redirect("/result-page");
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}
