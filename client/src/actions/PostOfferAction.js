import { redirect } from "react-router-dom";

const ApiUrl = import.meta.env.VITE_API_URL;

export default async function PostOfferAction({ request }) {
  try {
    const formData = await request.formData();

    const jobTitle = formData.get("job_title");
    const jobType = formData.get("job_type");
    const content = formData.get("content");
    const location = formData.get("location");
    const minSalary = formData.get("min_salary");
    const maxSalary = formData.get("max_salary");
    const companyId = formData.get("company.id");

    const response = await fetch(`${ApiUrl}/api/offers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobTitle,
        jobType,
        content,
        location,
        minSalary,
        maxSalary,
        companyId,
      }),
    });
    if (response.ok === false) {
      throw new Error("");
    }
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
  return redirect(`/result-page`);
}
