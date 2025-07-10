import { ApplicationState } from "models/ApplicationState";
import { RootState } from "store";

export interface AppContentStateProps {
  applicationState: RootState["app"]["applicationState"];
  isAuthenticated: RootState["auth"]["isAuthenticated"];
}

export interface AppContentDispatchProps {
  dispatchInitApplication: () => void;
  dispatchSetApplicationState: (state: ApplicationState) => void;
  dispatchInitApplicationUser: () => void;
}

export type AppContentProps = AppContentStateProps & AppContentDispatchProps;
