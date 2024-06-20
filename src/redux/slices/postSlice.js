import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



const initialState ={
    postList:[],
    isLoading:false,
    isError:false

}
export const getPosts = createAsyncThunk("post/getPosts" ,async()=>{
    const resp = await axios.get("https://json-placeholder.mock.beeceptor.com/posts")
    return resp.data
})
const postSlice =createSlice(
    {
        name:"post",initialState,initialState,
        reducers:{
            setPostList :(state,action)=>{
               state.postList = action.payload
            },
            setIsPostLoading:(state,action)=>{
                state.isLoading = action.payload
            },
            setIsPostError:(state,action)=>{
                state.isError = action.payload
            }
        },
        extraReducers:(builder)=>{
     builder.addCase(getPosts.pending,(state,action)=>{
         console.log(action)
         state.isLoading = true
     })
     .addCase(getPosts.fulfilled,(state,action)=>{
        state.postList = action.payload
        state.isLoading = false
     })
     .addCase(getPosts.rejected),(state,action)=>{
        state.isError = true
        state.isLoading = false
        }

        
        }}
)

export const {setIsPostError,setIsPostLoading,setPostList} = postSlice.actions
export default postSlice.reducer