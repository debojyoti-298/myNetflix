// import { useEffect } from "react";
// import { API_OPTIONS } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { addNowPlayingMovies } from "../utils/movieSlice";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () =>{

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    
    return <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
    </div>
}

export default Browse;