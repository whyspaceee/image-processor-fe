import React from "react";
import ReactDOM from "react-dom/client";
import UploadPage from "./pages/UploadPage.js";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import {  AuthProvider } from "./context/AuthContext.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UploadPage />,
  },

]);



const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
