import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Theme } from "./config/theme";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
