import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);

    if(movies === null) return; // if nowPlayingMovies value is null then return , this is also known as "early return"

    const mainMovie = movies[0];
    //Here we need only one movie to show at first as a video
    console.log(mainMovie);
    const {original_title,overview, id} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer