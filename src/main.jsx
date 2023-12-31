import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tailwindcss/tailwind.css";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./AppRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
