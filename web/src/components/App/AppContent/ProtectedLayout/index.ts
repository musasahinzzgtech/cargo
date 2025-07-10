import { ComponentType } from "react";

import { connect } from "react-redux";
import { Dispatch, compose } from "redux";

import ProtectedLayout from "./ProtectedLayout.layout";
import { ProtectedLayoutOwn } from "./ProtectedLayout.types";
import { logoutUserAsync } from "store/auth/asyncActions";

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  dispatchLogout: () => dispatch(logoutUserAsync()),
});

const decorate = compose<ComponentType<ProtectedLayoutOwn>>(
  connect(null, mapDispatchToProps)
);

export default decorate(ProtectedLayout);
