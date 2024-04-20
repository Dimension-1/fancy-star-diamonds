import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import routes from "../src/routes/index.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);
