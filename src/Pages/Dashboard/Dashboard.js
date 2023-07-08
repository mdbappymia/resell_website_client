/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-full lg:w-64 flex-shrink-0">
        {/* Sidebar Content */}
        <div className="p-4">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <ul className="mt-4">
            <li className="py-2">
              <Link to="/dashboard" className="block hover:text-gray-300">
                All Products
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/dashboard/add_product"
                className="block hover:text-gray-300"
              >
                Add Products
              </Link>
            </li>
            <li className="py-2">
              <a href="#" className="block hover:text-gray-300">
                Orders
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="block hover:text-gray-300">
                Customers
              </a>
            </li>
            <li className="py-2">
              <Link
                to="/"
                className="block absolute hover:text-gray-300 bottom-5"
              >
                Back to home
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        <Outlet />
        {/* Add your dashboard components and content here */}
      </div>
    </div>
  );
};

export default Dashboard;
