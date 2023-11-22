import React from 'react'
import Loginform from './Loginform'
import Browse from './Browse'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { removeUser,addUser } from '../utils/userSlice';
import { useEffect } from 'react';


const Body = () => {
    
    const dispatch = useDispatch()
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

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))
              
              
            } else {
              dispatch(removeUser())
              
            }
          });
    })
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body