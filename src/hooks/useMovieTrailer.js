import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice'
import { useDispatch } from 'react-redux';
const useMovieTrailer = (movieId) =>{

     const dispatch = useDispatch();

  //fetch the API for the background video of that particular movie and updating the store
  const getMovieVideos= async()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US", API_OPTIONS);
    const json= await data.json();
    console.log(json.results);

    const filterData = json.results.filter((video)=>video.type ==="Trailer");
    const trailer =filterData.length? filterData[0] : json.results[0]; //if there is no "Trailer" then this condition will work
    console.log(trailer);
    dispatch(addTrailerVideo(trailer))
  }

  useEffect(()=>{
    getMovieVideos();
  },[])


}

export default useMovieTrailer;