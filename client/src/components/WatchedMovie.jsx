import React from 'react';

const WatchedMovie = (props) => {
  return (
  <li>
    <button>Remove</button>
    {'   ' + props.movie.title}
  </li>
  )
}

export default WatchedMovie;