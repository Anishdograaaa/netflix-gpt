import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies)
    if (!movies) return;
    
    const mainmovie = movies[6];
    const {original_title,overview,id} = mainmovie;
    

  return (
    <div>
        <Videotitle title={original_title} overview = {overview}/>
        <VideoBackground movieId = {id}/>
        
    </div>
  )
}

export default MainContainer