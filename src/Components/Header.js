import React, { useEffect } from 'react';
import {   onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {   useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { MAIN_LOGO, USER_ICON } from '../utils/constant';
import { addToggleGpt } from '../utils/gptSlice';
import { LANG_SELECT } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const toggleGpt = useSelector(store => store.gpt.toggleGpt)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user)
  
  
  
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

  const handletogglegpt = ()=>{
    dispatch(addToggleGpt())
  }
  
  const HandleSignOut = ()=>{
    signOut(auth).then(() => {
      
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }

  const handlelanguagechange = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  
      
  
  return (
    <div className='w-screen absolute px-9 py-2 bg-gradient-to-b from-black z-10 flex flex-col justify-between  md:flex-row '>
        <img className='w-48 mx-auto md:mx-0' src={MAIN_LOGO}
        alt='logo'/>
        {user && (<div className='p-2 flex justify-between'>
        {toggleGpt? (<select className=' h-9 mt-4 px-3  bg-gray-800 text-white' onChange={handlelanguagechange}>
            {LANG_SELECT.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
            }
            
            
          </select>) : null}
                      
          
        <button className='bg-purple-700 text-white py-2 md:m-4 px-4 ml-2 rounded-lg ' onClick={handletogglegpt}>{toggleGpt? "HomePage": "GPT Search" }</button>
          <img alt='usericon' className='w-12 h-12 my-2 hidden md:block' src={USER_ICON}/>
          <button onClick={HandleSignOut} className='font-bold text-white md:px-1 ' >(Sign Out)</button>
        </div>)}
        
    </div>
  )
}

export default Header