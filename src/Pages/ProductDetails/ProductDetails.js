import React from "react";
import { useParams } from "react-router-dom";
import products from "../../assets/data/products.json";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const product = products.find((p) => p.id.toString() === id.toString());
  console.log(products);
  if (!product?.id) {
    return <h1>Loading</h1>;
  }
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={product?.image[0]}
              alt={product.name}
              className="w-full h-auto rounded-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.short_desc}</p>
            <p className="text-gray-600 mb-2">
              Product Type: {product.product_type}
            </p>
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
            <p className="text-gray-600 mb-2">Rating: {product.rating}</p>
            <p className="text-gray-600 mb-4">Created: {product.create_time}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
