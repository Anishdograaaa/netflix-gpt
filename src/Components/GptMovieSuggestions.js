import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
    const {movieNames,movieResults} = useSelector(store => store.gpt);
    if (!movieNames) return null;

  return (
    <div className='bg-black text-white p-4 bg-m-4 opacity-90'>
      <p className='text-lg p-2 '>The results are {movieNames.join(",")}</p>
        <div >
            {movieNames.map((movieName,index)=>(<MovieList title={movieName} movies={movieResults[index]}/>))}
            
        </div>
    </div>
  )
}

export default GptMovieSuggestions