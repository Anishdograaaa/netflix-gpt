import React from 'react'
import lang from '../utils/langconstants'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import openai from '../utils/openAi'
import { API_OPTIONS } from '../utils/constant'
import { addGptMovies } from '../utils/gptSlice'

const GptSearchBar = () => {
  const langkey = useSelector(store => store.config.lang)
  const searchtext = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTmbd = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS);
    const json = await data.json();
    console.log(json.results)
    return json.results

  }
  const handlegptsearchclick = async()=>{
       console.log(searchtext.current.value)
       const gptquery = "Act as a movie recommendation system and return result for the query:"+searchtext.current.value+
       ". Return the result in commas separated way and only five name as example shown ahead:Your Name,titanic,GOT,Aot,naruto"
       const gptsearch = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptquery }],
        model: 'gpt-3.5-turbo',
       
      });

      if (!gptsearch.choices){

      }
      const gptmovies = gptsearch.choices?.[0]?.message?.content.split(",");

      const promisearray = gptmovies.map((movie)=>searchMovieTmbd(movie))
      const tmbdResults = await Promise.all(promisearray);
      dispatch(addGptMovies({movieNames:gptmovies,movieResults:tmbdResults}))
  }
  return (
    <div className='pt-[15%] md:py-[10%] flex justify-center'>
        <form className='w-full md:w-1/2  grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchtext} className='m-4 p-2 col-span-9'  type='text' placeholder={lang[langkey].placeholdergpt}/>
            <button className='bg-red-600 px-4 col-span-3 m-4 text-white rounded-lg text-sm md:text-lg' 
            onClick={handlegptsearchclick}> {lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;