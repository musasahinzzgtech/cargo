import { ReactNode } from "react";
import { RootState } from "store";

export interface RouteConfig {
  path: string;
  Component: ReactNode;
}

export interface RouterStateProps {
  isAuthenticated: RootState["auth"]["isAuthenticated"];
}

export type RouterProps = RouterStateProps;
