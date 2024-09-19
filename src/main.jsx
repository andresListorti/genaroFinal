// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
// import './index.css'
import { customTheme } from "./themeConfig";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={customTheme}>
    <App />
  </ThemeProvider>
);
