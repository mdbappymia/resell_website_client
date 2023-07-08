/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Carousel } from "flowbite-react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((e) => console.log(e));
  }, [id, product.image]);

  if (!product?.id) {
    return <h1>Loading</h1>;
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src={product.image.split(",")[0]}
            alt=""
            className="md:hidden w-full"
          />
          <Carousel className="hidden md:block">
            {product.image?.split(",").length > 0 &&
              product.image
                ?.split(",")
                .map((imag, i) => <img key={i} src={imag} alt="" />)}
          </Carousel>
          <div>
            <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.short_desc}</p>
            <div>
              <h1 className="text-2xl border-b-2">Product Details:</h1>
              <div dangerouslySetInnerHTML={{ __html: product.details }}></div>
            </div>
            <div className=" py-3">
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
            <p className="text-gray-600 mb-4">Rating: {product.rating}</p>
            <a href={product.product_link} target="_blank">
              <Button gradientDuoTone="purpleToPink" outline>
                Buy This Product
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
