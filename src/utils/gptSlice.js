import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
         toggleGpt:false
    },
    reducers:{
        addToggleGpt:(state,action)=>{
               state.toggleGpt = !state.toggleGpt
        }
    }
})
export const {addToggleGpt} = gptSlice.actions;
export default gptSlice.reducer;