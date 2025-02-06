import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <div className="bg-primary text-white p-4">
      <p>Hola</p>
    </div>
  </StrictMode>
);
