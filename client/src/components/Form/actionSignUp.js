const ApiUrl = import.meta.env.VITE_API_URL;

const signUpAction = async ({ request }) => {
  try {
    const formData = await request.formData();

    // data for user table
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");

    // data for candidate table
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const birthday = formData.get("birthday");

    // data for company table
    const name = formData.get("name");

    console.info("Sending data for user:", { email, password, role });

    const response = await fetch(`${ApiUrl}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        role,
      }),
    });

    if (response.ok !== true) {
      throw new Error("Failed to create user");
    }

    const insertId = await response.json();

    if (role === "candidate") {
      console.info("Sending data for candidate:", {
        firstname,
        lastname,
        birthday,
        user_id: insertId,
      });
      const responseCandidate = await fetch(`${ApiUrl}/api/candidates`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          firstname,
          lastname,
          birthday,
          user_id: insertId,
        }),
      });
      if (responseCandidate.ok !== true) {
        throw new Error("Failed to create candidate");
      }
    } else {
      console.info("Sending data for company:", {
        name,
        user_id: insertId,
      });
      const responseCompany = await fetch(`${ApiUrl}/api/companies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          user_id: insertId,
        }),
      });
      if (responseCompany.ok !== true) {
        throw new Error("Failed to create company");
      }
    }
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
  return true;
};

export default signUpAction;
