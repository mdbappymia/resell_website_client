import React from "react";
import allProducts from "../../../assets/data/products.json";
import { Button } from "flowbite-react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const TrendingProduct = () => {
  const products = allProducts.slice(0, 4);
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className=" hover:scale-105 hover:shadow-md transition-all ease-in-out"
            >
              <div className="relative h-62 w-full mb-3">
                <div className="absolute flex flex-col top-0 right-0 p-3">
                  <button className="transition ease-in duration-300 bg-gray-600  shadow hover:shadow-md text-gray-100 rounded-full w-8 h-8 text-center p-1 text-xs">
                    {product.discount}%
                  </button>
                </div>
                <img
                  src={product.image[0]}
                  alt="Just a flower"
                  className=" w-full   object-fill"
                />
              </div>
              <div className="flex-auto justify-evenly p-2">
                <div className="flex flex-wrap ">
                  <div className="w-full flex-none text-sm flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-red-500 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-400 whitespace-nowrap mr-3">
                      4.60
                    </span>
                    <span className="mr-2 text-gray-400">rating</span>
                  </div>
                  <div className="flex items-center w-full justify-between min-w-0 ">
                    <h2 className="text-lg mr-auto cursor-pointer text-gray-500 hover:text-gray-700 truncate ">
                      {product.name}
                    </h2>
                    <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                      INSTOCK
                    </div>
                  </div>
                </div>
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

export default TrendingProduct;
