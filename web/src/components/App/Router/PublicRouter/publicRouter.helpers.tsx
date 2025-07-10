import React from "react";

import { PUBLIC_ROUTES } from "constants/routes/publicRoutes";
import LoginPage from "components/common/pages/Public/LoginPage";

import { RouteConfig } from "../Router.types";
import RegisterPage from "components/common/pages/Public/RegisterPage";
import HomePage from "components/common/pages/Public/HomePage";

const publicRoutes: RouteConfig[] = [
  {
    path: PUBLIC_ROUTES.home,
    Component: <HomePage />,
  },
  {
    path: PUBLIC_ROUTES.login,
    Component: <LoginPage />,
  },
  {
    path: PUBLIC_ROUTES.register,
    Component: <RegisterPage />,
  },
];

export const createPublicRoutes = () => {
  return publicRoutes;
};
