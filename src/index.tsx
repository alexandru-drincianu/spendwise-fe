import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./configs/AppRoutes";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
