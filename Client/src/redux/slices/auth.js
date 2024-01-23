import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQDEyMy5jb20iLCJpZCI6IjY1YWY3OGYwYmQwMTVmNDExODRlN2FhZCIsImlhdCI6MTcwNjAxOTM0NiwiZXhwIjoxNzA2MTkyMTQ2fQ.idn2L5x0Z1m7GriIfTFg_Ae-le46W6UolSVcI6hjMoQ",
}

const slice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setToken : (state,action) => {
            state.token = action.payload
        }
        
        
    }
}) 

export const {setToken} = slice.actions;
export default slice.reducer;