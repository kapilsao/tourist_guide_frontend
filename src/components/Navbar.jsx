// import React from 'react'
// import {NavLink} from 'react-router-dom'

// function navbar() {
//   return (
//     <>
        
// <nav className="bg-[#1e3a8a] p-4 flex items-center justify-between">
//   <div className="flex items-center gap-2 space-x-8">
//     <div className="w-8 h-8 flex items-center justify-center bg-white text-blue-800 rounded-full">
//       {/* Your icon can be inserted here, using either an SVG or a font icon */}
//       {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6m0 4h.01" />
//       </svg> */}
//       <img src="flight.png" alt="" />
//     </div>
//     <span className="text-white font-bold text-lg">TravelGuide</span>
//     <NavLink to="/"  className={({isActive}) => `hover:underline ${ isActive? "text-orange-700" : "text-white"} `}>Home</NavLink>
//     <NavLink to="Recommendations"  className="hover:underline text-white">Recommendations</NavLink>
//     <NavLink to="Maps"  className="hover:underline text-white">Map</NavLink>
//   </div>
  
//   <div className='flex items-center gap-2 space-x-8' >
//     <NavLink to="/"  className="text-white hover:underline">Login</NavLink>
//     <NavLink to="/"  className="text-white hover:underline">Logout</NavLink>
//   </div>
// </nav>


//     </>
//   )
// }

// export default navbar



// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import axios from 'axios';

// function Navbar() {
//   const [locationName, setLocationName] = useState('Locating...');
//   const [locationError, setLocationError] = useState(null);

//   const API_KEY = "AIzaSyBpkCikOTWylLkxXbRYxeQj6hRCjJsrvjs";  // Replace with your Google Maps API Key

//   // Function to get location name using reverse geocoding
//   const getLocationName = async (lat, lng) => {
//     try {
//       const response = await axios.get(
//         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`
//       );
//       const addressComponents = response.data.results[0].address_components;

//       // Extract city or locality from address components (you can customize this based on your needs)
//       const city = addressComponents.find((component) =>
//         component.types.includes("locality")
//       )?.long_name;

//       const country = addressComponents.find((component) =>
//         component.types.includes("country")
//       )?.long_name;

//       setLocationName(city ? `${city}, ${country}` : country || 'Location not found');
//     } catch (error) {
//       setLocationError('Unable to retrieve location name');
//     }
//   };

//   // Fetch the user's location using the Geolocation API
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           getLocationName(latitude, longitude);  // Reverse geocoding to get location name
//         },
//         (error) => {
//           setLocationError('Unable to retrieve location');
//         }
//       );
//     } else {
//       setLocationError('Geolocation is not supported by this browser.');
//     }
//   }, []);

//   return (
//     <>
//       <nav className="bg-[#1e3a8a] p-4 flex items-center justify-between">
//         <div className="flex items-center gap-2 space-x-8">
//           <div className="w-8 h-8 flex items-center justify-center bg-white text-blue-800 rounded-full">
//             <img src="flight.png" alt="Flight Icon" />
//           </div>
//           <span className="text-white font-bold text-lg">TravelGuide</span>
//           <NavLink to="/" className={({ isActive }) => `hover:underline ${isActive ? "text-orange-700" : "text-white"}`}>
//             Home
//           </NavLink>
//           <NavLink to="/Recommendations" className="hover:underline text-white">
//             Recommendations
//           </NavLink>
//           <NavLink to="/Maps" className="hover:underline text-white">
//             Map
//           </NavLink>
//         </div>

//         <div className="flex items-center gap-2 space-x-8">
//           {/* Location Icon and Current Location */}
//           <div className="flex items-center gap-2 text-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6m0 4h.01"
//               />
//             </svg>

//             {locationError ? (
//               <span className="text-sm">{locationError}</span>
//             ) : (
//               <span className="text-sm">{locationName}</span>
//             )}
//           </div>

//           <NavLink to="/login" className="text-white hover:underline">
//             Login
//           </NavLink>
//           <NavLink to="/logout" className="text-white hover:underline">
//             Logout
//           </NavLink>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;






import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  const [locationName, setLocationName] = useState('Locating...');
  const [locationError, setLocationError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle

  const API_KEY = "AIzaSyBpkCikOTWylLkxXbRYxeQj6hRCjJsrvjs"; // Replace with your Google Maps API Key

  // Function to get location name using reverse geocoding
  const getLocationName = async (lat, lng) => {
    console.log(lat , lng);
    
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`
      );
  
      if (!response.data.results || response.data.results.length === 0) {
        setLocationError('No results found for the given coordinates');
        return;
      }
  
      const addressComponents = response.data.results[0].address_components;
  
      const city = addressComponents.find((component) =>
        component.types.includes("locality")
      )?.long_name;
  
      const country = addressComponents.find((component) =>
        component.types.includes("country")
      )?.long_name;
  
      setLocationName(city ? `${city}, ${country}` : country || 'Location not found');
    } catch (error) {
      console.error('Error fetching location:', error.response?.data || error.message);
      setLocationError('Unable to retrieve location name');
    }
  };
  

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude
            , longitude
          );
          
          getLocationName(latitude, longitude);  // Reverse geocoding to get location name
        },
        (error) => {
          setLocationError('Unable to retrieve location');
        }
      );
    } else {
      setLocationError('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <nav className="bg-[#1e3a8a] p-4">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 flex items-center justify-center bg-white text-blue-800 rounded-full">
            <img src="flight.png" alt="Flight Icon" />
          </div>
          <span className="text-white font-bold text-lg">TravelGuide</span>
        </div>

        {/* Hamburger icon for mobile menu */}
        <button
          className="block lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Main menu */}
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto transition-all duration-300 ${
            menuOpen ? 'block' : 'hidden'
          } lg:block`}
        >
          <div className="flex flex-col lg:flex-row items-center lg:space-x-8 text-white mt-4 lg:mt-0">
            <NavLink to="/" className={({ isActive }) => `hover:underline ${isActive ? "text-orange-700" : "text-white"} `}>
              Home
            </NavLink>
            <NavLink to="/Recommendations" className="hover:underline">
              Recommendations
            </NavLink>
            <NavLink to="/Maps" className="hover:underline">
              Map
            </NavLink>
          </div>

          {/* Current Location */}
          <div className="flex items-center text-white mt-4 lg:mt-0 lg:ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6m0 4h.01"
              />
            </svg>

            {locationError ? (
              <span className="ml-2 text-sm">{locationError}</span>
            ) : (
              <span className="ml-2 text-sm">{locationName}</span>
            )}
          </div>

          {/* Login/Logout buttons */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-8 text-white mt-4 lg:mt-0 lg:ml-12"> {/* Increased margin between current location and login */}
            <NavLink to="/login" className="hover:underline">
              Login
            </NavLink>
            <NavLink to="/logout" className="hover:underline">
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
