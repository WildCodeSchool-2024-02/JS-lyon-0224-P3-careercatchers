import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostNewOffer from "./pages/PostNewOffer";
import ProfilPageCandidate from "./pages/ProfilPageCandidate";
import ResultPage from "./pages/ResultPage";
import SignUpPage from "./pages/SignUpPage";

import PostOfferAction from "./actions/PostOfferAction";

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
      },
      {
        path: "/post-offer",
        id: "post-offer",
        element: <PostNewOffer />,
        loader: async () => fetch(`${ApiUrl}/api/companies`),
        action: PostOfferAction,
      },
      {
        path: "/login-page",
        id: "login-page",
        element: <LoginPage />,
      },
      {
        path: "/profil-page-candidate",
        id: "profil-page-candidate",
        element: <ProfilPageCandidate />,
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
