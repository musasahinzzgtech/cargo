import { compose } from "redux";
import { connect } from "react-redux";

import { RootState } from "store";
import { ProtectedRouterStateProps } from "./ProtectedRouter.types";
import ProtectedRouter from "./ProtectedRouter.layout";

const mapStateToProps = (state: RootState): ProtectedRouterStateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const decorate = compose(connect(mapStateToProps, {}));

export default decorate(ProtectedRouter);
