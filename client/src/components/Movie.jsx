import React from 'react';

const Movie = (props) => {
  return (
  <li>
    <button>Watched</button>
    <button>Remove</button>
    {'   ' + props.movie.title}
  </li>
  )
}

export default Movie;