import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addonTheAir } from '../utils/moviesSlice'
import { useEffect } from 'react';
const useOnTheAircopy = ()=>{
    
    const dispatch = useDispatch();
    const getonTheAir = async()=>{
           
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?page=1',API_OPTIONS)
        const json = await data.json();
        dispatch(addonTheAir(json.results))
        

    }
    
    useEffect(()=>{
        
        
        getonTheAir();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
}

export default useOnTheAircopy;