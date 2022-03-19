import React from 'react';
import WatchedMovie from './Movie.jsx'

const Watched = (props) => {
  return (
    <div>Watched
      <ul>
    {props.watchedMovies.map(movie => (<Movie key={props.watchedMovies.title} movie={movie}/>))}
    </ul>
    </div>
  )
}

export default Watched;