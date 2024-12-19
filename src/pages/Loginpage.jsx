import React, { useState , useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


import  {UserContext} from '../context/userContext'

function Loginpage() {

  const [userData , setUserData] = useState({
    
    email : "",
    password : "",
    
  })

  const [error , setError] = useState('')
  const navigate =useNavigate()

  const {setCurrentUser} = useContext(UserContext)

  const changeInputHandler= (e) =>{
    setUserData(prevState =>{
      return{...prevState,[e.target.name]: e.target.value}
    })
  }

  const loginUser = async (e) =>{
    e.preventDefault();
    setError('')
    
      const response  = await axios.post(`http://localhost:5000/api/users/login`, userData ).then( async (res)=>{
        const user = await res.data;
        setCurrentUser(user)
        navigate('/')

      }).catch((err)=>{
        setError(err.response.data.message);
      })
      
      
    
  }

  
    return (
      <section className="bg-gray-100 flex items-center justify-center min-h-screen login">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md container">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>
        <form className="flex flex-col space-y-4 login_form" onSubmit={loginUser}>
          {error && (
            <p className="text-red-500 text-sm font-medium form-error_message">
              {error}
            </p>
          )}
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
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
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition btn primary"
          >
            Login
          </button>
        </form>
        <small className="block mt-4 text-center text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </small>
      </div>
    </section>
    
  )
}

export default Loginpage


