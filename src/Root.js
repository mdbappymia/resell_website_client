import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router";
import useAuth from "./hooks/useAuth";

const Root = () => {
  const { getUser } = useAuth();
  useEffect(() => {
    getUser();
  });
  return <RouterProvider router={router} />;
};

export default Root;
