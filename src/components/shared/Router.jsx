import Layout from './../../layouts/Layout.jsx';
import DashboardLayout from './../../layouts/DashboardLayout.jsx';
import Catogory from './../../components/web/catogories/Catogory.jsx';
import Home from './../../components/web/home/Home.jsx';
import HomeDashboard from './../../components/dashboard/home/Home.jsx'
import CatogoryDashboard from './../../components/dashboard/catogories/Catogory.jsx'
import Register from './../../components/web/register/Register.jsx';
import {createBrowserRouter} from "react-router-dom";

export const Route= createBrowserRouter([
    {
    path:'/',
    element:<Layout/>,
    children:[
      {path:'home',
      element:<Home/>
      },
      {path:'catogory',
      element:<Catogory/>
      },{
        path:'register',
        element:<Register/>
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
    