// import { useEffect } from "react";
// import { API_OPTIONS } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { addNowPlayingMovies } from "../utils/movieSlice";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () =>{

    useNowPlayingMovies();

    
    return <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
    </div>
}

export default Browse;