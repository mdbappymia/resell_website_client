import React from "react";
import { Button, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuth from "../../../../hooks/useAuth";

const Header = () => {
  const { isAuthenticate } = useSelector((state) => state.userSlice);
  const { logOut } = useAuth();
  return (
    <div>
      <div>
        <Navbar fluid rounded>
          <Navbar.Brand href="/">
            <img
              alt="Flowbite React Logo"
              className="mr-3 h-6 sm:h-9"
              src="https://www.flowbite-react.com/favicon.svg"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite React
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <div className="flex items-center">
              <div className="relative mr-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 py-2 rounded-full bg-white text-gray-800 focus:outline-none shadow-sm"
                />
                <button className="absolute right-0 top-0 mt-3 mr-3">
                  <svg
                    className="text-gray-500 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-4.35-4.35"
                    />
                  </svg>
                </button>
              </div>
              <button className="bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-gray-100">
                Search
              </button>
            </div>

            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Link active={"true"} to="/">
              <p>Home</p>
            </Link>
            <Link to="/shop">Shop</Link>
            <Link to="/">Contact</Link>
            {isAuthenticate ? (
              <div className="dropdown-btn">
                <Dropdown label="More">
                  <Dropdown.Item>
                    <Link to="/dashboard">Dashboard</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Item>
                    <Button onClick={logOut} color="failure" pill size="xs">
                      <p>Sign Out</p>
                    </Button>
                  </Dropdown.Item>
                </Dropdown>
              </div>
            ) : (
              <></>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
