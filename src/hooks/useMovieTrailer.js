import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { addTrailerVideo } from '../utils/moviesSlice'
import { useDispatch } from 'react-redux'

const useMovieTrailer = (movieid)=>{
    const dispatch = useDispatch()
    const getMovieVideos = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieid+'/videos?language=en-US',API_OPTIONS )
        const json = await data.json();
        console.log(json)
        const filterdata = json.results?.filter(video=>video.type === "Clip");
        const trailer = filterdata.length? filterdata[0] : json.results[0];
        dispatch(addTrailerVideo(trailer))

    }
    useEffect(()=>{
        
           getMovieVideos()
           // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
}

export default useMovieTrailer;