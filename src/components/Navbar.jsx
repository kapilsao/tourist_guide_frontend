import React from 'react'
import {NavLink} from 'react-router-dom'

function navbar() {
  return (
    <>
        
<nav className="bg-[#1e3a8a] p-4 flex items-center justify-between">
  <div className="flex items-center gap-2 space-x-8">
    <div className="w-8 h-8 flex items-center justify-center bg-white text-blue-800 rounded-full">
      {/* Your icon can be inserted here, using either an SVG or a font icon */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6m0 4h.01" />
      </svg> */}
      <img src="flight.png" alt="" />
    </div>
    <span className="text-white font-bold text-lg">TravelGuide</span>
    <NavLink to="/"  className={({isActive}) => `hover:underline ${ isActive? "text-orange-700" : "text-white"} `}>Blogs</NavLink>
    <NavLink to="/"  className="hover:underline text-white">Recommendations</NavLink>
    <NavLink to="/"  className="hover:underline text-white">Profile</NavLink>
  </div>
  
  <div className='flex items-center gap-2 space-x-8' >
    <NavLink to="/"  className="text-white hover:underline">Login</NavLink>
    <NavLink to="/"  className="text-white hover:underline">Logout</NavLink>
  </div>
</nav>


    </>
  )
}

export default navbar