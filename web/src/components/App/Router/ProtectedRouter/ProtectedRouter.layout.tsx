import React, { useEffect, useMemo } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { createProtectedRoutes } from "./PretectedRouter.helpers";
import { ProtectedRouterProps } from "./ProtectedRouter.types";
import { getUserDetails } from "store/auth/asyncActions";
import { useDispatch } from "react-redux";

const ProtectedRouter = ({ isAuthenticated }: ProtectedRouterProps) => {
  const routes = useMemo(() => createProtectedRoutes(), []);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (routes.every((route) => route.path !== location.pathname)) {
      navigate("/home");
    }
  }, [location.pathname]);

  useEffect(() => {
    dispatch(getUserDetails() as any);
  }, []);
  return (
    <Routes location={location} key={location.pathname}>
      {/* <Route element={<AnimatedRouter />}> */}
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.Component} />
      ))}

      <Route path="*" element={<div>dada</div>} />
    </Routes>
  );
};

export default ProtectedRouter;
