const ApiUrl = import.meta.env.VITE_API_URL;

export default async function PostOfferAction(offerForm, user) {
  try {
    console.info(user);
    const response = await fetch(`${ApiUrl}/api/offers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        offerForm,
        user,
      }),
    });
    if (response.ok !== true) {
      // response.status !== 201
      throw new Error("Erreur lors de l'inscription");
    }
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}
