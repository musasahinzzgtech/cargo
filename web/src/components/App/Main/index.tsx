import AppContent from "../AppContent";
import store from "../../../store";
import { Provider } from "react-redux";

const Main = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default Main;
