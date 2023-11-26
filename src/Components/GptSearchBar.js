import React from 'react'
import lang from '../utils/langconstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langkey = useSelector(store => store.config.lang)
  return (
    <div className='py-[10%] flex justify-center'>
        <form className='w-1/2  grid grid-cols-12'>
            <input className='m-4 p-2 col-span-9'  type='text' placeholder={lang[langkey].placeholdergpt}/>
            <button className='bg-red-600 px-4 col-span-3 m-4 text-white rounded-lg'> {lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar