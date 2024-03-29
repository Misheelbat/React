import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {AuthcontextProvider} from "./context/Authcontext";

ReactDOM.render(
  <React.StrictMode>
    <AuthcontextProvider>
      <App />
    </AuthcontextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
