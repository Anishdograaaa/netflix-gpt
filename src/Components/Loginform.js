import React, { useState } from 'react'
import Header from './Header'

const Loginform = () => {
    const [isSigninform,setisSignInForm] = useState(true);
    const toggleSignInForm = ()=>{
         setisSignInForm(!(isSigninform));
    }
  return (
    <div >
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg'
             alt="background"/>
        </div>
        
        <form className='bg-black absolute w-3/12 p-12  mx-auto right-0 left-0 my-36 text-white bg-opacity-80 rounded-lg'>
            <h1 className='text-3xl font-bol py-4'>{isSigninform? "Sign In":"Sign Up"}</h1>
            {!isSigninform && (<input type='text' placeholder='Name' className='p-4 my-2 w-full bg-gray-800 rounded-lg' />)}
            
            <input type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-800 rounded-lg' />
            <input type='text' placeholder='Password' className='p-4 my-2 w-full bg-gray-800 rounded-lg'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' >{isSigninform?"Sign In":"Sign Up"}</button>
            <p className='py-2 cursor-pointer' onClick={toggleSignInForm}>{isSigninform?"New to Netflix? Sign Up Now":"Already registered Sign In now"}</p>
        </form>

    </div>
  )
}

export default Loginform