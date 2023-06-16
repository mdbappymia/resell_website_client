import { Button } from "flowbite-react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import allProducts from "../../../assets/data/products.json";
import { Link } from "react-router-dom";

const MostSellsSection = () => {
  const products = allProducts.slice(0, 4);
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Most Sells</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md hover:scale-105 transition-all ease-in-out"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-md"
              />
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
                  <Button>
                    <p>
                      Buy now <FaShoppingCart className="inline" />
                    </p>
                  </Button>
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
