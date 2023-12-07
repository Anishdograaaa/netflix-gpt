import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    
  return (
    <div className='text-white w-screen px-8'>
         <h1 className='text-lg md:text-3xl py-4 px-2'>{title}</h1>
        <div className='flex overflow-auto no-scrollbar'>
            
            <div className='flex'>
              {movies?.map((movie)=>(<MovieCard key={movie.id} posterpath = {movie.poster_path}/>))}
            
            </div>
        </div>
        
    </div>
  )
}

export default MovieList