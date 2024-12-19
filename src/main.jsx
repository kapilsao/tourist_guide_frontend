import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import App from './App.jsx'
import './index.css'
import Recommendations from './pages/Recommendations.jsx'
import Result from './pages/Result.jsx'
import Maps from './pages/Maps.jsx'
import { SearchProvider } from './context/searchContext.jsx'
import Loginpage from './pages/Loginpage.jsx'
import LogoutPage from './pages/Logoutpage.jsx'
import Register from './pages/Register.jsx'
import UserProvider from './context/userContext.jsx'
import ContactUs from './pages/ContactUs.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProvider><Layout/></UserProvider>,
    children: [
      {
        path: "",
        element: <Home/>
      } , 
      {
        path: "recommendations",
        element:<Recommendations/>
      },{
        path:"Result",
        element:<Result />

      },
      {
        path:"Maps",
        element:<Maps />

      },
      {
        path:"login",
        element:<Loginpage/>
      },
      {
        path:"logout",
        element:<LogoutPage/>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"contactUs",
        element:<ContactUs/>
      },
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <SearchProvider>
    <RouterProvider router={router}/>
    </SearchProvider>
  </StrictMode>
)
