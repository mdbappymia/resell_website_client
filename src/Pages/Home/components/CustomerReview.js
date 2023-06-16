import React from "react";
import reviews from "../../../assets/data/reviews.json";
import { Avatar } from "flowbite-react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const CustomerReview = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Customer Reviews</h2>

        <AliceCarousel
          responsive={{
            0: {
              items: 1,
            },
            1024: {
              items: 3,
              itemsFit: "contain",
            },
          }}
          items={reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-4 shadow-md rounded-md mx-3"
            >
              <div className="flex items-center mb-4">
                <Avatar rounded />
                <h3 className="ml-2 text-lg font-semibold">{review.name}</h3>
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        ></AliceCarousel>
      </div>
    </section>
  );
};

export default CustomerReview;
