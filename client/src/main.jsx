import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ResultPage from "./pages/ResultPage";
import SignUpPage from "./pages/SignUpPage";
import PostNewOffer from "./pages/PostNewOffer";

const ApiUrl = import.meta.env.VITE_API_URL;

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        id: "homePage",
        element: <HomePage />,
      },
      {
        path: "/result-page",
        id: "resultPage",
        element: <ResultPage />,
        loader: async () => fetch(`${ApiUrl}/api/offers/with-companies`),
      },
      {
        path: "/sign-up-page",
        id: "sign-up-page",
        element: <SignUpPage />,
        action: async ({ request }) => {
          try {
            const formData = await request.formData();

            const email = formData.get("email");
            const password = formData.get("password");
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
              throw new Error("");
            }
          } catch (err) {
            console.error("Fetch error:", err);
            return null;
          }
          return redirect("/result-page");
        },
      },
      {
        path: "/post-offer",
        id: "post-offer",
        element: <PostNewOffer />,
        loader: async () => fetch(`${ApiUrl}/api/companies`),
        action: async ({ request }) => {
          try {
            const formData = await request.formData();

            // eslint-disable-next-line camelcase
            const job_title = formData.get("job_title");
            // eslint-disable-next-line camelcase
            const job_type = formData.get("job_type");
            const localisation = formData.get("localisation");
            // eslint-disable-next-line camelcase
            const company_id = formData.get("company.id");

            const response = await fetch(`${ApiUrl}/api/offers`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                // eslint-disable-next-line camelcase
                job_title,
                // eslint-disable-next-line camelcase
                job_type,
                localisation,
                // eslint-disable-next-line camelcase
                company_id,
              }),
            });

            if (!response.ok) {
              throw new Error("");
            }
          } catch (err) {
            console.error("Fetch error:", err);
            return null;
          }
          return redirect(`/result-page`);
        },
      },
      {
        path: "/login-page",
        id: "login-page",
        element: <LoginPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
