import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useOnTheAircopy from '../hooks/useOnTheAircopy'
import useAiringToday from '../hooks/useAiringToday'
import useTvSeries from '../hooks/useTvSeries'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useOnTheAircopy();
  useAiringToday();
  useTvSeries();
  const togglegptsearch = useSelector(store => store.gpt.toggleGpt)
  
  
  return (
    <div className='no-scrollbar'>
       <Header/>
       {togglegptsearch? <GptSearch/> : 
           <>
               <MainContainer/>
               <SecondaryContainer/>
           </>    
       }
       
        
    </div>
    
  )
}

export default Browse;