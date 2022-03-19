import React from 'react';
import Movie from './Movie.jsx';



const MovieList = (props) => {
  if (props.movieArray.length === 0) {
    return <div>There Are No Movies On Your List</div>
  }
  return (
    <ul>
    {props.movieArray.map(movie => (<Movie key={props.movieArray.title} movie={movie}/>))}
    </ul>
  )
};

export default MovieList;
