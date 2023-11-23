import React, { useEffect } from 'react';
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { MAIN_LOGO, USER_ICON } from '../utils/constant';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((store)=> store.user)
  
  const HandleSignOut = ()=>{
    signOut(auth).then(() => {
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid,email,displayName} = user;
          dispatch(addUser({
            uid:uid,
            email:email,
            displayName:displayName})
            );
            navigate("/browse")
          
          
          
          
        } else {
          dispatch(removeUser())
          navigate("/")
         
          
               }
          },);
          return ()=> unsubscribe();
        },[])
      
  
  return (
    <div className='w-full absolute px-9 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-48' src={MAIN_LOGO}
        alt='logo'/>
        {user && (<div className='p-2 flex'>
          <img alt='usericon' className='w-12 h-12 my-2' src={USER_ICON}/>
          <button onClick={HandleSignOut} className='font-bold text-white px-1' >(Sign Out)</button>
        </div>)}
        
    </div>
  )
}

export default Header