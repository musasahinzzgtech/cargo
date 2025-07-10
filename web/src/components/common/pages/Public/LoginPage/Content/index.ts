import { compose } from "redux";
import { connect } from "react-redux";

import { AppDispatch, RootState } from "store";

import Content from "./Content.layout";
import { ContentDispatchProps, ContentStateProps } from "./Content.types";
import { loginUserAsync } from "store/auth/asyncActions";

const mapStateToProps = (state: RootState): ContentStateProps => ({
  isLoadingAuth: state.auth.isLoadingAuth,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch: AppDispatch): ContentDispatchProps => ({
  dispatchLoginUser: (payload: any) => dispatch(loginUserAsync(payload)),
});

const decorate = compose(connect(mapStateToProps, mapDispatchToProps));

export default decorate(Content);
