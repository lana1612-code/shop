import React, { useState } from 'react'
//import {Route} from './components/shared/Router.jsx'
import {RouterProvider} from "react-router-dom";
import Layout from './layouts/Layout.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import Catogory from './components/web/catogories/Catogory.jsx';
import Home from './components/web/home/Home.jsx';
import HomeDashboard from './components/dashboard/home/Home.jsx'
import CatogoryDashboard from './components/dashboard/catogories/Catogory.jsx'
import Register from './components/web/register/Register.jsx';
import {createBrowserRouter} from "react-router-dom";
import Login from './components/web/login/Login.jsx';
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
    
export default function App() {
  const [user,setUser] = useState(null);
   
  const saveCurrentUser = ()=>{
    const token = localStorage.getItem("userToken");
    const decoded = jwtDecode(token);
    setUser(decoded);
  }

  useEffect(
    ()=>{
     if (localStorage.getItem("userToken")){
      saveCurrentUser();
     }
    },[]
   );

 const Route= createBrowserRouter([
    {
    path:'/',
    element:<Layout user={user} setUser={setUser} />,
    children:[
      {
      path:'/',
      element:<Home/>
      },
      {path:'catogory',
      element:<Catogory/>
      },{
        path:'register',
        element:<Register/>
      },{
        path:'login',
        element:<Login saveCurrentUser={saveCurrentUser}/>
      },{
        path:'*',
        element:<div>not found web</div>
      }
    ]
    },
    {
      path:'/dashboard',
      element:<DashboardLayout/>,
      children:[
        {path:'homeDashboard',
        element:<HomeDashboard/>
        },
        {path:'catogoryDashboard',
        element:<CatogoryDashboard/>
        },{
          path:'*',
          element:<div>not found dashboard</div>
        }
      ]
    }
    ]);//containe array of object

  return (
    <RouterProvider router={Route} />

  )
}
