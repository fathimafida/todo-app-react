import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import postSlice from "./slices/postSlice";


const store = configureStore({
    reducer: {
        todo: todoSlice,
        post: postSlice
    },
    devTools: true
})
export default store;