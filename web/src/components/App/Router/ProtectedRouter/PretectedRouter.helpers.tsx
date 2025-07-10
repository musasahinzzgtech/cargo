import React from "react";

import { RouteConfig } from "../Router.types";
import { PROTECTED_ROUTES } from "constants/routes/protectedRoutes";
import HomePage from "components/common/pages/Protected/HomePage";
import SearchPage from "components/common/pages/Protected/SearchPage";

const protectedRoutes: RouteConfig[] = [
  {
    path: PROTECTED_ROUTES.home,
    Component: <HomePage />,
  },
  {
    path: PROTECTED_ROUTES.search,
    Component: <SearchPage />,
  },
];

export const createProtectedRoutes = () => {
  return protectedRoutes;
};
