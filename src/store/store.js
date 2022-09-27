import { configureStore } from "@reduxjs/toolkit";
import { blogsSlice } from "./blogs-slice";

export const store =  configureStore({
    reducer: {
        blogs: blogsSlice.reducer
    }
})