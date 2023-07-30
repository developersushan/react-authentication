import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Registrar from './Components/Registrar/Registrar.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'
import { ToastBar } from 'react-hot-toast'



const router = createBrowserRouter([
  {
    path:'/', element:<Main></Main>,
    children:[
      {
        path:'/', element:<Home></Home>
      },
      {
        path:'/home', element:<Home></Home>
      },
      {
        path:'/login', element:<Login></Login>
      },
      {
        path:'/registrar', element:<Registrar></Registrar>
      },

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProviders>
    <RouterProvider router={router}  >
    <ToastBar  position="top-center"
  reverseOrder={false}></ToastBar>
    </RouterProvider>
    </AuthProviders>

    
  </React.StrictMode>,
)
