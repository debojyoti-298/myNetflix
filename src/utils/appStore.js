import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer:{
        //here we will write the slices
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        config:configReducer

    }
});

export default appStore;
