import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects : false,
    skills : false,
    about : false,
    exp : false

}

const slice = createSlice({
    name : "active",
    initialState,
    reducers : {
        setActive : (state,action) => {
            state["projects"] = false;
            state["skills"] = false;
            state["about"] = false;
            state["exp"] = false;
            state[action.payload] = true;
        },
        setAllFalse : (state,action) => {
            state["projects"] = false;
            state["skills"] = false;
            state["about"] = false;
            state["exp"] = false;
        }
        
    }
}) 

export const {setActive} = slice.actions;
export default slice.reducer;