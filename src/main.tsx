import React from "react";
import ReactDOM from "react-dom/client";
import UploadPage from "./pages/UploadPage.js";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EditPage from "./pages/EditPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UploadPage />,
  },
  {
    path: "/edit",
    element: <EditPage />,
  }

]);



const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
