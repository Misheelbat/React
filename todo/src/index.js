import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TestProvider } from "./context/TestContext";

ReactDOM.render(
  <React.StrictMode>
    <TestProvider>
      <App />
    </TestProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
