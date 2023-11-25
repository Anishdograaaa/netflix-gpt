import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    movies?.nowPlayingMovies && (
  <div className='bg-black w-screen'>
    <div className=' -mt-48 relative z-20'>
        <MovieList title = {"Now playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title = {"Top Rated Series"} movies={movies.onTheAir}/>
        <MovieList title = {"Airing Today"} movies={movies.airingToday}/>
        <MovieList title = {"Popular"} movies={movies.popularMovies}/>
        <MovieList title = {"Top Rated Movies"} movies={movies.tvSeries}/>
    </div>
  </div>
  )
  )
}

export default SecondaryContainer