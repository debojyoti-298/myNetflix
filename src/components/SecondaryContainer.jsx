import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies)
  console.log(movies);
  // if (!movies || movies.length === 0) {
  //   return <div>Loading...</div>;
  // }
  return (

    //if movies is not null then only it will go for <MovieList /> part
    movies && (<div className='bg-black'>

      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies. topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
    </div>)
  )
}

export default SecondaryContainer