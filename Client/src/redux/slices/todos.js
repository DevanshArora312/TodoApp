import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : null,
    one_todo : null,
    createFormData : {
        title : "",

    }
}

const slice = createSlice({
    name : "todos",
    initialState,
    reducers : {
        setTodos : (state,action) => {
            state.todos = action.payload
        },
        setOne : (state,action) => {
            state.one_todo = action.payload
        }
        
        
    }
}) 

export const {setTodos,setOne} = slice.actions;
export default slice.reducer;