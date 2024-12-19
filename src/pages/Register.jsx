import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'


function Register() {

  const [userData , setUserData] = useState({
    name : "",
    email : "",
    password : "",
    password2 : ""
  })
   
  const [error , setError] = useState('')
  const navigate = useNavigate()

  const registerUser = async (e) =>{
    e.preventDefault();
    console.log("Hello Frontend");
    const response = await axios.post(`http://localhost:5000/api/users/register`, userData).then(
      (res)=>{
        navigate('/login');
      }
    ).catch(
      (err)=>{
        setError("Couldn't register user. Please try again.");
      }
    );
//     const newUser = await response.data;
// console.log(newUser)
          

    // if(!newUser){
    //       setError("Couldn't register user. Please try again.");
    //     } else {
    //       navigate('/');
    //     }
    // try {
    //   // Log the newUser after it has been assigned a value
    //   console.log(newUser);
    //   // const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, userData);
    //   const response = await axios.post(`http://localhost:5000/api/users/register`, userData);
    //   const newUser = await response.data;
    //   console.log(newUser);
      
      
    //   // if(!newUser){
    //   //   setError("Couldn't register user. Please try again.");
    //   // } else {
    //   //   navigate('/');
    //   // }
  
    // } catch (err) {
    //     // Check if the error response exists and print the actual error message
    // if (err.response && err.response.data && err.response.data.message) {
    //   setError(err.response.data.message); // Assuming the error message is in err.response.data.message
    //   console.error(err.response.data.message);
    // } else {
    //   setError("An unexpected error occurred.");
    //   // console.error(err);
    // }
    // }
  }
  // const registerUser = async (e) =>{
  //   e.preventDefault()
  //   console.log("Hello Frontend")
  //   // console.log(userData);
    
  //   try {
  //     console.log(newUser);
  //     const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register` , userData )
  //     const newUser = await response.data;
      
  //     if(!newUser){
  //       setError("Couldn't register user . please try again")
  //     }

  //     navigate('/')
      

  //   } catch (err) {
  //     setError(err.response)
  //   }
  // }
  const changeInputHandler= (e) =>{
    setUserData(prevState =>{
      return{...prevState,[e.target.name]: e.target.value}
    })
  }

    return (
      <section className="bg-gray-100 flex items-center justify-center min-h-screen register">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md container">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h2>
        <form
          className="flex flex-col space-y-4 register_form"
          onSubmit={registerUser}
          method="post"
          action="#"
        >
          {error && (
            <p className="text-red-500 text-sm font-medium form-error_message">
              {error}
            </p>
          )}
    
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={changeInputHandler}
            autoFocus
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={userData.password2}
            onChange={changeInputHandler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
    
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition btn primary"
          >
            Register
          </button>
        </form>
    
        <small className="block mt-4 text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </small>
      </div>
    </section>
    
  )
}

export default Register