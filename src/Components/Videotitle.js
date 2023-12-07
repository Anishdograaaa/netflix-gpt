import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className='pt-[15%] pl-6 md:pl-16 aspect-video w-screen absolute text-white bg-gradient-to-r from-black '>
        <h1 className='text-xl md:text-5xl font-bold p-2'>{title}</h1>
        <p className='hidden md:inline-block w-1/4 p-2 text-sm'>{overview}</p>
        <div className='py-2'>
            <button className='bg-white text-black px-5 py-2 md:px-12 m-2 md:py-3 font-bold rounded-lg hover:bg-opacity-80'>Play</button>
            <button className='bg-gray-400 hidden md:inline-block px-12 m-2 py-3 font-bold rounded-lg bg-opacity-50'>More Info</button>
        </div>
        
    </div>
  )
}

export default Videotitle