import { Button } from "flowbite-react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import products from "../../assets/data/products.json";

const Shop = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex justify-between py-3">
                <div class="text-sm font-light mt-1">
                  <del>{product.price}$</del>
                </div>
                <div class="text-xl font-semibold mt-1">
                  {(
                    product.price -
                    (product.price * product.discount) / 100
                  ).toFixed(0)}
                  $
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">{product.rating}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.307 5.75l2.81-2.73a1 1 0 011.413 0L10 5.037l3.47-2.76a1 1 0 011.32.083l2.9 2.48a1 1 0 01.287 1.386l-1.05 2.79l2.53 1.94a1 1 0 01.297 1.392l-2.6 6.4a1 1 0 01-1.63.374l-2.79-2.103L9.653 18.76a1 1 0 01-1.306-.16l-2.6-2.387l-2.787 2.05a1 1 0 01-1.63-.375l-2.6-6.4a1 1 0 01.297-1.393l2.53-1.94l-1.05-2.79a1 1 0 01.287-1.386z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div class="flex text-sm font-medium justify-between">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
