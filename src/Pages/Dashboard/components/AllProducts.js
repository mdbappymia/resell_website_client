import React from "react";
import SingleProductCard from "./SingleProductCard";
import { useSelector } from "react-redux";

const AllProducts = () => {
  const { products } = useSelector((state) => state.productSlice);
  console.log(products);
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold uppercase text-center my-5 p-4">
          Product Page
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.length > 0 &&
            products.map((product, i) => (
              <SingleProductCard key={i} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
