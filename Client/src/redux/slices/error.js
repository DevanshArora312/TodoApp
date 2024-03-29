import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error : null    
}

const slice = createSlice({
    name : "error",
    initialState,
    reducers : {
        setError : (state,action) => {
            state.error = action.payload
        }   
    }
}) 

export const {setError} = slice.actions;
export default slice.reducer;