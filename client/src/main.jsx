import "./index.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "./styles/tokens.css";
import "./styles/base.css";
import { BrowserRouter } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
