import React from 'react'
import {Route} from './components/shared/Router.jsx'
import {RouterProvider} from "react-router-dom";
export default function App() {
  return (
    <RouterProvider router={Route} />

  )
}
