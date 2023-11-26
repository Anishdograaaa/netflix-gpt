import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BACK_GROUND } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-20'>
        <img src={BACK_GROUND}
             alt="background"/>
        </div>
        <GptSearchBar/>
    </div>
  )
}

export default GptSearch