import React from "react";
import bannerData from "../../../assets/data/banner.json";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            {bannerData.banner_title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
            {bannerData.banner_subtitle}
          </p>
          <Link
            to="/shop"
            className="bg-white hover:bg-gray-200 text-blue-500 py-3 px-6 rounded-full text-lg md:text-xl lg:text-2xl"
          >
            Shop Now
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={bannerData.banner_image}
            alt="Banner"
            className="max-w-full1111 h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
