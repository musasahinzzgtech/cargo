import React from "react";
import ProtectedRouter from "./ProtectedRouter";
import PublicRouter from "./PublicRouter";
import { RouterProps } from "./Router.types";

const Router = ({ isAuthenticated }: RouterProps) => {
  return (
    <>
      {isAuthenticated && <ProtectedRouter />}
      {!isAuthenticated && <PublicRouter />}
    </>
  );
};

export default Router;
