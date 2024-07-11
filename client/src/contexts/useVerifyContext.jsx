import { useState } from "react";

const useVerifyContext = () => {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const [isAuthorised, setIsAuthorised] = useState(null);

  const fetchData = async (requiredRole) => {
    try {
      const response = await fetch(`${ApiUrl}/api/${requiredRole}/verifyRole`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.status === 200) {
        setIsAuthorised(true);
      } else if (response.status === 403) {
        setIsAuthorised(false);
        throw new Error("Access forbidden");
      } else {
        setIsAuthorised(false);
        throw new Error("Network response was not ok");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return { isAuthorised, fetchData };
};

export default useVerifyContext;
