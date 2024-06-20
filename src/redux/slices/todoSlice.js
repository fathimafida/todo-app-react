import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
 
const initialState = {
    todoList:[],
    isError: false,
    isLoading: true
}
 
export const getTodoData = createAsyncThunk("todo/getTodoData", async () => {
    const response = await axios.get("https://json-placeholder.mock.beeceptor.com/todos")
    return response.data
})

const todoSlice = createSlice({
 name: "todo",
 initialState: initialState,
 reducers: {

//   setTodoList: (state, action) => {
//    state.todoList = action.payload
//   },
//   setIsTodoError: (state, action) => {
//    state.isError = action.payload
//   },
//   SetIsTodoLoading: (state, action) => {
//    state.isLoading = action.payload
//   }
 },
 extraReducers:(builder)=>{
    builder.addCase(getTodoData.pending, (state, action) => {
        console.log(action)
        state.isLoading = true
    })
    builder.addCase(getTodoData.fulfilled, (state, action) => {
        state.todoList = action.payload
        state.isLoading=false
 })
 builder.addCase(getTodoData.rejected),(state, action) => {
     state.isError = true
     state.isLoading = false
 }
}
})

export const { setTodoList, setIsTodoError, SetIsTodoLoading } = todoSlice.actions
export default todoSlice.reducer