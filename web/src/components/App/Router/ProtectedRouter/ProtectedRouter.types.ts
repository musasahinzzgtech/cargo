import { RootState } from "store";

export interface ProtectedRouterStateProps {
  isAuthenticated: RootState["auth"]["isAuthenticated"];
}

export type ProtectedRouterProps = ProtectedRouterStateProps;
