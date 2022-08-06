import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { theme } from "../src/theme/theme";
import { ThemeProvider } from "@mui/material";

const App = React.lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
