import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Shop from "./Pages/Shop/Shop";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AllProducts from "./Pages/Dashboard/components/AllProducts";
import AddProduct from "./Pages/Dashboard/components/AddProduct";
import Login from "./Pages/Login/Login";
import SignupPage from "./Pages/Login/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <AllProducts />,
      },
      {
        path: "add_product",
        element: <AddProduct />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
