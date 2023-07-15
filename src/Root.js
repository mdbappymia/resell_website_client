import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router";
import useAuth from "./hooks/useAuth";
import { getAllProduct } from "./redux/slices/productSlice";
import { useDispatch } from "react-redux";

const Root = () => {
  const { getUser } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    getUser();
    dispatch(getAllProduct());
  });
  return <RouterProvider router={router} />;
};

export default Root;
