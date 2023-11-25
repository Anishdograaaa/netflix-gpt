import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] pl-16 aspect-video w-screen absolute text-white bg-gradient-to-r from-black '>
        <h1 className='text-5xl font-bold p-2'>{title}</h1>
        <p className='w-1/4 p-2'>{overview}</p>
        <div className='py-2'>
            <button className='bg-white text-black px-12 m-2 py-3 font-bold rounded-lg hover:bg-opacity-80'>Play</button>
            <button className='bg-gray-400 px-12 m-2 py-3 font-bold rounded-lg bg-opacity-50'>More Info</button>
        </div>
        
    </div>
  )
}

export default Videotitle