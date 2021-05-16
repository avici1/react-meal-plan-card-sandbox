import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Router from "./routes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router />
  </StrictMode>,
  rootElement
);
