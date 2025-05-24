import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ManualsPage from "./pages/ManualsPage.jsx";
import MembersPage from "./pages/MembersPage.jsx";
import Layout from "./App";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/articles",
        element: <ArticlesPage />,
      },
      {
        path: "/manuals",
        element: <ManualsPage />,
      },
      {
        path: "/members",
        element: <MembersPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
