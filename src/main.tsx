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
    path: "/:key/edit",
    element: <EditPage />,
    loader: async ({ params }) => {
      if(!params.key) throw new Error("No key provided");
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      console.log(`${baseUrl}/edit/${params.key}`)
      const response = await fetch(`${baseUrl}/edit/${params.key}`
      ,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem(params.key)}`
        },
      });
      const data = await response.json();
      return data;
    }
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
