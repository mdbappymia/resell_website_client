import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const ProductForm = () => {
  const [content, setContent] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    data.details = content;
    console.log(data);
    //You can perform further actions with the form data
    fetch("http://localhost:5000/product/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertId > 0) {
          setContent(0);
          reset();
        }
      });
  };

  return (
    <form className=" mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        {errors.name && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Image
        </label>
        <input
          type="text"
          id="image"
          {...register("image", { required: true })}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        {errors.image && (
          <span className="text-red-500">
            This field is required <br />
          </span>
        )}
        <small className="text-gray-500">
          Enter image URLs separated by commas
        </small>
      </div>
      <div className="mb-4">
        <label
          htmlFor="product_type"
          className="block text-gray-700 font-bold mb-2"
        >
          Product Type
        </label>
        <select
          id="product_type"
          {...register("product_type", { required: true })}
          className="border border-gray-300 rounded-md p-2 w-full"
        >
          <option value="">Select Product Type</option>
          <option value="trending">Trending</option>
          <option value="most_sell">Most Sell</option>
        </select>
        {errors.product_type && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="details" className="block text-gray-700 font-bold mb-2">
          Details
        </label>
        {/* <textarea
          id="details"
          {...register("details", { required: true })}
          className="border border-gray-300 rounded-md p-2 w-full"
        /> */}
        <ReactQuill
          value={content}
          onChange={(value) => setContent(value)}
          placeholder="Write something..."
        />
        {/* {errors.details && (
          <span className="text-red-500">This field is required</span>
        )} */}
      </div>
      <div className="mb-4">
        <label
          htmlFor="short_desc"
          className="block text-gray-700 font-bold mb-2"
        >
          Short Description
        </label>
        <input
          type="text"
          id="short_desc"
          {...register("short_desc", { required: true })}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        {errors.short_desc && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
          Rating
        </label>
        <select
          id="rating"
          {...register("rating", { required: true })}
          className="border border-gray-300 rounded-md p-2 w-full"
        >
          <option value="">Select Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {errors.rating && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          {...register("price", { required: true })}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        {errors.price && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="discount"
          className="block text-gray-700 font-bold mb-2"
        >
          Discount
        </label>
        <input
          type="number"
          id="discount"
          {...register("discount", { required: true })}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        {errors.discount && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="product_link"
          className="block text-gray-700 font-bold mb-2"
        >
          Product Link
        </label>
        <input
          type="text"
          id="product_link"
          {...register("product_link", { required: true })}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        {errors.product_link && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
