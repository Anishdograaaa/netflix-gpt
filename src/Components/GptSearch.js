import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BACK_GROUND } from '../utils/constant'
import GptMovieSuggestions from "./GptMovieSuggestions"

const GptSearch = () => {
  return (
    <div >
        <div className='fixed -z-20'>
        <img className=' h-screen object-cover md:w-screen ' src={BACK_GROUND}
             alt="background"/>
        </div>
        <div className='pt-[30%] md:p-0'>
        <GptSearchBar/>
        <GptMovieSuggestions/>
        </div>
        
    </div>
  )
}

export default GptSearch