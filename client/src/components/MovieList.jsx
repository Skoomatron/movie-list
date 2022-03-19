import React from 'react';
import Movie from './Movie.jsx';
// import movieArray from '../data/exampleMoviedata.js'
// map individual movie list items to unsorted list
// evaluate movie array for length

const movieArray = [];

const Movies = ({movies}) => {
  console.log(movieArray.length);
  if (movieArray.length === 0) {
    return <div>There Are No Movies By That Name!</div>
  }
  return (
    <ul>
    {movieArray.map(movie => (<Movie key={movie.title} movie={movie}/>))}
    </ul>
  )
};

export default Movies;
