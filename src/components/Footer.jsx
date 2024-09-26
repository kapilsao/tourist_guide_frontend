import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo or Icon */}
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2a10 10 0 00-7.946 16.32l-2.483 2.482a.75.75 0 001.06 1.06l2.482-2.483A10 10 0 1012 2zm-6.53 9.53a7.5 7.5 0 1110.61 0L12 15.61l-6.53-6.53z" />
          </svg>
          <span className="font-semibold text-lg">TravelGuide</span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <NavLink
            to="/"
            exact
            className="hover:text-gray-300"
            activeClassName="text-gray-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-gray-300"
            activeClassName="text-gray-300"
          >
            About
          </NavLink>
          <NavLink
            to="/destinations"
            className="hover:text-gray-300"
            activeClassName="text-gray-300"
          >
            Destinations
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-gray-300"
            activeClassName="text-gray-300"
          >
            Contact
          </NavLink>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          &copy; 2024 TravelGuide. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
