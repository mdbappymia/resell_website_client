/* eslint-disable react/jsx-no-target-blank */
import { Button } from "flowbite-react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const MostSellsSection = () => {
  const allProducts = useSelector((state) => state.productSlice.products);
  const products = allProducts?.filter((a) => a.product_type === "most_sell");
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Most Sells</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md hover:scale-105 transition-all ease-in-out"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product?.image?.split(",")[0]}
                  alt="Just a flower"
                  className=" w-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.short_desc}</p>
                <div className="flex justify-between py-3">
                  <div className="text-sm font-light mt-1">
                    <del>{product.price}$</del>
                  </div>
                  <div className="text-xl font-semibold mt-1">
                    {(
                      product.price -
                      (product.price * product.discount) / 100
                    ).toFixed(0)}
                    $
                  </div>
                </div>
                <div className="flex text-sm font-medium justify-between">
                  <a href={product.product_link} target="_blank">
                    <Button>
                      <p>
                        Buy now <FaShoppingCart className="inline" />
                      </p>
                    </Button>
                  </a>
                  <Button outline pill>
                    <Link to={`/details/${product.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostSellsSection;
