import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import signUpAction from "./components/Form/actionSignUp";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
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
        action: signUpAction,
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
