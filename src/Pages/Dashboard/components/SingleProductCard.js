import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SingleProductCard = ({ product }) => {
  return (
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
        <h3 className="text-lg font-semibold mb-2">
          {product.name?.substring(0, 30)}
        </h3>
        <p className="text-gray-600 mb-4">
          {product.short_desc?.substring(0, 60)}
        </p>
        <div className="flex justify-between py-3">
          <div className="text-sm font-light mt-1">
            <del>{product.price}$</del>
          </div>
          <div className="text-xl font-semibold mt-1">
            {(product.price - (product.price * product.discount) / 100).toFixed(
              0
            )}
            $
          </div>
        </div>
        <div className="flex text-sm font-medium justify-between">
          <Button>
            <p>Update</p>
          </Button>
          <Button outline pill>
            <Link to={`/details/${product._id}`}>View Details</Link>
          </Button>
          <Button color="failure">
            <p>Delete</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
