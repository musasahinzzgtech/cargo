import { Dispatch, compose } from "redux";
import { connect } from "react-redux";

import { RootState } from "store";
import {
  AppContentDispatchProps,
  AppContentStateProps,
} from "./AppContent.types";
import AppContent from "./AppContent.layout";
import { initApplication, setApplicationState } from "store/app/slice";
import { initApplicationUser } from "store/auth/slice";

const mapStateToProps = (state: RootState): AppContentStateProps => ({
  applicationState: state.app.applicationState,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch: Dispatch): AppContentDispatchProps => ({
  dispatchInitApplication: () => dispatch(initApplication()),
  dispatchSetApplicationState: (state) => dispatch(setApplicationState(state)),
  dispatchInitApplicationUser: () => dispatch(initApplicationUser()),
});
const decorate = compose(connect(mapStateToProps, mapDispatchToProps));

export default decorate(AppContent);
