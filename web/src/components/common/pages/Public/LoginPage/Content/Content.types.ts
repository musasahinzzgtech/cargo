import { RootState } from "store";

export interface ContentStateProps {
  isLoadingAuth: RootState["auth"]["isLoadingAuth"];
  isAuthenticated: RootState["auth"]["isAuthenticated"];
}

export interface ContentDispatchProps {
  dispatchLoginUser: (payload: { email: string; password: string }) => void;
}

export type ContentProps = ContentStateProps & ContentDispatchProps;
