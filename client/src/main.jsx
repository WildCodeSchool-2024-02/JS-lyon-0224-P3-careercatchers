import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import FavoritePage from "./pages/FavoritePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyApplication from "./pages/MyApplication";
import OfferPageCompany from "./pages/OfferPageCompany";
import PostNewOffer from "./pages/PostNewOffer";
import ProfilPageCandidate from "./pages/ProfilPageCandidate";
import ProfilPageCompany from "./pages/ProfilPageCompany";
import ResultPage from "./pages/ResultPage";
import SignUpPage from "./pages/SignUpPage";

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
      {
        path: "/page-my-application",
        id: "page-my-application",
        element: <MyApplication />,
        loader: async () => fetch(`${ApiUrl}/api/offers/with-companies`),
      },
      {
        path: "/my-favorite-offer",
        id: "my-favorite-offer",
        element: <FavoritePage />,
        loader: async () => fetch(`${ApiUrl}/api/offers/with-companies`),
      },
      {
        path: "/profil-page-company",
        id: "profil-page-company",
        element: <ProfilPageCompany />,
      },
      {
        path: "/offer-page-company",
        id: "offer-page-company",
        element: <OfferPageCompany />,
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
