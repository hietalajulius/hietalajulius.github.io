import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Grommet } from "grommet";

ReactDOM.render(
  <Grommet>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Grommet>,
  document.getElementById("root")
);
