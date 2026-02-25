import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies= action.payload; //whatever is coming we are putting it in nowPlayingMovies 

        },

        addPopularMovies:(state,action)=>{
            state.popularMovies= action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies= action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies= action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo, addTopRatedMovies, addUpcomingMovies, addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer ;