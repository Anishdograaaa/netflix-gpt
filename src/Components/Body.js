import React from 'react'
import Loginform from './Loginform'
import Browse from './Browse'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Loginform/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body