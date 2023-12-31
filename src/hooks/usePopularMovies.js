import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addpopularMovies } from '../utils/moviesSlice'
import { useEffect } from 'react';
const usePopularMovies = ()=>{
 
    const dispatch = useDispatch();
    const getPopularMovies = async()=>{
        
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS)
        const json = await data.json();
        dispatch(addpopularMovies(json.results))
        

    }
    
    useEffect(()=>{
       
        getPopularMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
}

export default usePopularMovies;