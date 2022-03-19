import React from 'react';



// set variable to single list item at movie title
const Movie = ({movie}) => {
  return <li><select>
    <option value='watched'>Watched</option>
    <option value='notWatched'>Not Watched</option>
    </select>{movie.title}</li>
}

export default Movie;