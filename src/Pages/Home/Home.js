import React from "react";
import Banner from "./components/Banner";
import TrendingProduct from "./components/TrendingProduct";
import MostSellsSection from "./components/MostSellsProduct";
import CustomerReview from "./components/CustomerReview";

const Home = () => {
  return (
    <>
      <Banner />
      <TrendingProduct />
      <MostSellsSection />
      <CustomerReview />
    </>
  );
};

export default Home;
