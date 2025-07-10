import React, { Fragment, useEffect, useMemo } from "react";
import { createPublicRoutes } from "./publicRouter.helpers";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AnimatedRouter from "../AnimatedRouter";

const PublicRouter = () => {
  const routes = useMemo(() => createPublicRoutes(), []);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (routes.every((route) => route.path !== location.pathname)) {
      navigate("/login");
    }
  }, [location.pathname]);
  return (
    <Routes location={location} key={location.pathname}>
      {/* <Route element={<AnimatedRouter />}> */}
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.Component} />
        ))}

        <Route path="*" element={<div>dada</div>} />
      {/* </Route> */}
    </Routes>
  );
};

export default PublicRouter;
