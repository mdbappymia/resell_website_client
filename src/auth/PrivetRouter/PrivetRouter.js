// import { Navigate, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isLoading, isAuthenticate } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();
  if (isLoading) return <h1>Loading</h1>;
  if (!isAuthenticate) {
    // If user is not authenticated, redirect to login page
    navigate("/login");
    // return null;
    // return;
    // window.location.replace("/login");
  } else return children;
};

export default PrivateRoute;
