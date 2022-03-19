import React from 'react';

const Movie = ({movie}) => {
  return
  <li>
    <select>
      <option value='watched'>Watched</option>
      <option value='notWatched'>Not Watched</option>
    </select>
    {movie.title}
  </li>
}

export default Movie;