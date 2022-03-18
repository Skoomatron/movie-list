import React from 'react';
// import movies from '../Data/exampleMovieData.js'




const Movies = function() {
  if (movies.length === 0) {
    return <div>There Are No Movies By That Name!</div>
  }
  return (
    <ul>
    {movies.map(movie => (
      <Movie key={movie.title} movie={movie}/>
    ))}
    </ul>
  )
};




export default Movies;