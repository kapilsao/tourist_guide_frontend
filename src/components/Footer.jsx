// import React from "react";
// import { NavLink } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-[#1e3a8a] text-white py-6">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           {/* Logo or Icon */}
//           <svg
//             className="w-6 h-6 text-white"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//           >
//             <path d="M12 2a10 10 0 00-7.946 16.32l-2.483 2.482a.75.75 0 001.06 1.06l2.482-2.483A10 10 0 1012 2zm-6.53 9.53a7.5 7.5 0 1110.61 0L12 15.61l-6.53-6.53z" />
//           </svg>
//           <span className="font-semibold text-lg">TravelGuide</span>
//         </div>

//         {/* Navigation Links */}
//         <div className="space-x-6">
//           <NavLink
//             to="/"
//             exact
//             className="hover:text-gray-300"
//             activeClassName="text-gray-300"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className="hover:text-gray-300"
//             activeClassName="text-gray-300"
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/blog"
//             className="hover:text-gray-300"
//             activeClassName="text-gray-300"
//           >
//             Blog
//           </NavLink>
//           <NavLink
//             to="/contactUs"
//             className="hover:text-gray-300"
//             activeClassName="text-gray-300"
//           >
//             Contact
//           </NavLink>
//         </div>

//         {/* Copyright */}
//         <div className="text-sm">
//           &copy; 2024 TravelGuide. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <footer className="bg-[#1e3a8a] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Icon */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center space-x-2">
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
          {/* Hamburger Icon */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col items-center space-y-4 md:flex md:flex-row md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
        >
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
            to="/blog"
            className="hover:text-gray-300"
            activeClassName="text-gray-300"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contactUs"
            className="hover:text-gray-300"
            activeClassName="text-gray-300"
          >
            Contact
          </NavLink>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center mt-4 md:mt-0">
          &copy; 2024 TravelGuide. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
