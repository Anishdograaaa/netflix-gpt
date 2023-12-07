import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addairingToday } from '../utils/moviesSlice'
import { useEffect } from 'react';
const useAiringToday = ()=>{
   
    const dispatch = useDispatch();
    const getAiringToday = async()=>{
           
        const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?page=1',API_OPTIONS)
        const json = await data.json();
        dispatch(addairingToday(json.results))
        

    }
    
    useEffect(()=>{
        
        
        getAiringToday();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
}

export default useAiringToday;