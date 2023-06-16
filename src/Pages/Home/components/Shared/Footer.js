import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Company Name</h4>
            <p className="text-sm">1234 Street Name</p>
            <p className="text-sm">City, State, Country</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2">
                <a href="#">Products</a>
              </li>
              <li className="mb-2">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-4">Connect with Us</h4>
            <div className="flex items-center">
              <a href="#" className="mr-4">
                <i className="fab fa-facebook-f text-gray-400 hover:text-gray-300"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-twitter text-gray-400 hover:text-gray-300"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-instagram text-gray-400 hover:text-gray-300"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-linkedin-in text-gray-400 hover:text-gray-300"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 my-6" />
        <p className="text-sm text-center">
          © 2023 Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
