import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";

const appStore = configureStore({
    reducer:{
        //here we will write the slices
        user:userReducer,
        movies:moviesReducer

    }
});

export default appStore;
