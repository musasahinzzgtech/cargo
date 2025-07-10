import { useEffect } from "react";
import Router from "../Router";
import ProtectedLayout from "./ProtectedLayout";
import PublicLayout from "./PublicLayout";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import { AppContentProps } from "./AppContent.types";
import { isNull } from "is-what";
import { ApplicationState } from "models/ApplicationState";
import AppIndicator from "components/common/organisms/AppIndicator";

const AppContent = ({
  isAuthenticated,
  applicationState,
  dispatchInitApplication,
  dispatchSetApplicationState,
  dispatchInitApplicationUser,
}: AppContentProps) => {
  const Container = isAuthenticated ? ProtectedLayout : PublicLayout;

  useEffect(() => {
    isNull(applicationState) && dispatchInitApplication();

    // Init application side effects
    if (applicationState === ApplicationState.UNINITIALIZED) {
      dispatchSetApplicationState(ApplicationState.INITIALIZING);

      Promise.all([dispatchInitApplicationUser()]).then(() => {
        dispatchSetApplicationState(ApplicationState.INITIALIZED);
      });
    }
  }, [applicationState]);

  return (
    <BrowserRouter>
      {applicationState === ApplicationState.INITIALIZED && (
        <Layout style={{ height: "100vh" }}>
          <Container>
            <Router />
          </Container>
        </Layout>
      )}
      {applicationState !== ApplicationState.INITIALIZED && <AppIndicator />}
    </BrowserRouter>
  );
};

export default AppContent;
