import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Shop from "./Pages/Shop/Shop";
import PrivateRoute from "./auth/PrivetRouter/PrivetRouter";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AllProducts from "./Pages/Dashboard/components/AllProducts";
import AddProduct from "./Pages/Dashboard/components/AddProduct";
import Login from "./Pages/Login/Login";
import SignupPage from "./Pages/Login/SignUp";

export const router = createBrowserRouter([
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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
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
  {
    path: "/privecy_policiy",
  },
]);
