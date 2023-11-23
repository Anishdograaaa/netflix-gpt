import React, { useState,useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import {  updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACK_GROUND } from '../utils/constant';




const Loginform = () => {
    const dispatch = useDispatch();
    const [isSigninform,setisSignInForm] = useState(true);
    const [errMessage,seterrMessage] = useState(null);
    const email = useRef(null);
    const name = useRef(null);
    const password = useRef(null);
    const handleSignInbtn =()=>{

      const message = checkValidData((isSigninform) ? null : name.current.value ,email.current.value,password.current.value);
      seterrMessage(message)
      if (message) return;
      if (!isSigninform){
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const {uid,email,displayName} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
              
              
            
          }).catch((error) => {
            seterrMessage(error.message)
          });
          
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage(errorCode+"-"+errorMessage)
          
        });
      
      }
      else{
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          
         
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage(errorCode+"-"+errorMessage)
        });
      }


    }

    const toggleSignInForm = ()=>{
         setisSignInForm(!(isSigninform));
    }
    
  return (
    <div >
        <Header/>
        <div className='absolute'>
        <img src={BACK_GROUND}
             alt="background"/>
        </div>
        
        <form onSubmit={(e)=>e.preventDefault()} className='bg-black absolute w-3/12 p-12  mx-auto right-0 left-0 my-36 text-white bg-opacity-80 rounded-lg'>
            <h1 className='text-3xl font-bol py-4'>{isSigninform? "Sign In":"Sign Up"}</h1>
            {!isSigninform && (<input ref={name} type='text' placeholder='Name' className='p-4 my-2 w-full bg-gray-800 rounded-lg' />)}
            
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-800 rounded-lg' />
            <input ref={password} type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-800 rounded-lg'/>
            <button  className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleSignInbtn}>{isSigninform?"Sign In":"Sign Up"}</button>
            <p className='py-2 text-red-600 font-bold text-lg'>{errMessage}</p>
            <p className='py-2 cursor-pointer' onClick={toggleSignInForm}>{isSigninform?"New to Netflix? Sign Up Now":"Already registered? Sign In now"}</p>
        </form>

    </div>
  )
}

export default Loginform