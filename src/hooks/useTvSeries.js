import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addtvSeries } from '../utils/moviesSlice'
import { useEffect } from 'react';
const useTvSeries = ()=>{
    
    const dispatch = useDispatch();
    const getTvSeries = async()=>{
           
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS)
        const json = await data.json();
        dispatch(addtvSeries(json.results))
        

    }
    
    useEffect(()=>{
        
        
        getTvSeries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
}

export default useTvSeries;