import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
       nowPlayingMovies:null,
       trailerVideo:null,
       popularMovies:null,
       onTheAir:null,
       airingToday:null,
       tvSeries:null
    },
    reducers:{
          addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
          },
          addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
          },
          addpopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
          }
          ,
          addonTheAir:(state,action)=>{
            state.onTheAir = action.payload;
          },
          addairingToday:(state,action)=>{
            state.airingToday = action.payload;
          },
          addtvSeries:(state,action)=>{
            state.tvSeries = action.payload;
          }
    }

});
export const {addNowPlayingMovies,addTrailerVideo,addpopularMovies,addonTheAir,addairingToday,addtvSeries} = moviesSlice.actions;
export default moviesSlice.reducer;