import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import CompetitionsPage from "./pages/CompetitionsPage.jsx";
import CompetitionDetailsPage from "./pages/CompetitionDetailsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import MembersPage from "./pages/MembersPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
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
        path: "/members",
        element: <MembersPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/competitions",
        element: <CompetitionsPage />,
      },
      {
        path: "/competitions/:id",
        element: <CompetitionDetailsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
