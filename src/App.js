import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Pages/Home/components/Shared/Header";
import Footer from "./Pages/Home/components/Shared/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
