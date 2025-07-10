import { compose } from "redux";
import { connect } from "react-redux";

import { RootState } from "store";
import { RouterStateProps } from "./Router.types";
import Router from "./Router.layout";

const mapStateToProps = (state: RootState): RouterStateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const decorate = compose(connect(mapStateToProps, {}));

export default decorate(Router);
