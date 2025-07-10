import { createRoot } from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Main from "components/App/Main";
import "./assets/styles/globalStyles.scss";

const appElement = document.getElementById("root");
const root = createRoot(appElement as any);

root.render(<Main />);
