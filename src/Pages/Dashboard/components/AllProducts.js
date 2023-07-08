import React, { useEffect, useState } from "react";
import SingleProductCard from "./SingleProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((e) => console.log(e));
  }, []);
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
