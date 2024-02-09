import React from "react";
import ReactDOM from "react-dom/client";
import TopPage from "./TopPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StateHistoryProvider } from "../../src";
import SecondPage from "./SecondPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TopPage />,
  },
  {
    path: "second",
    element: <SecondPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StateHistoryProvider>
      <RouterProvider router={router} />
    </StateHistoryProvider>
  </React.StrictMode>
);
