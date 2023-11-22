import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store)=> store.user)
  const navigate = useNavigate();
  const HandleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='w-full absolute px-9 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-48' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'/>
        {user && (<div className='p-2 flex'>
          <img alt='usericon' className='w-12 h-12 my-2' src="https://ih1.redbubble.net/image.618369215.1083/flat,800x800,075,f.u2.jpg"/>
          <button onClick={HandleSignOut} className='font-bold text-white px-1' >(Sign Out)</button>
        </div>)}
        
    </div>
  )
}

export default Header