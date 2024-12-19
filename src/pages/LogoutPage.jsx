import React , { useContext, useEffect} from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'


function LogoutPage() {
  const {setCurrentUser} = useContext(UserContext)
  const navigate = useNavigate()

  setCurrentUser(null)
  navigate("/login")
  return (
    <>
    </>
  )
}

export default LogoutPage