import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
    reducer:{
        //here we will write the slices
        user:userReducer,

    }
});

export default appStore;
