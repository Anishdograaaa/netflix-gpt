import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
         toggleGpt:false,
         movieResults:null,
         movieNames:null,

    },
    reducers:{
        addToggleGpt:(state,action)=>{
               state.toggleGpt = !state.toggleGpt
        },

        addGptMovies:(state,action)=>{
            const {movieResults,movieNames} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})
export const {addToggleGpt,addGptMovies} = gptSlice.actions;
export default gptSlice.reducer;