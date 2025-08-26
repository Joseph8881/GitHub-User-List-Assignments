import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GitHubProvider } from "./context/GitHubContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GitHubProvider>
      <App />
    </GitHubProvider>
  </React.StrictMode>
);
