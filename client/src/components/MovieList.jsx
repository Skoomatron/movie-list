import React from 'react';
import Movie from './Movie.jsx';


const movieArray = [];

const Movies = ({movies}) => {
  console.log()
  console.log(movieArray.length);
  if (movieArray.length === 0) {
    return <div>There Are No Movies On Your List</div>
  }
  return (
    <ul>
    {movieArray.map(movie => (<Movie key={movie.title} movie={movie}/>))}
    </ul>
  )
};

export default Movies;
