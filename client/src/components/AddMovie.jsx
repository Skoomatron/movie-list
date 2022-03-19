import React from 'react';
import MovieList from './MovieList.jsx';


const AddMovie = (props) => {
  return (
    <form onSubmit={props.submitMovie}>
      <label>
        Add Movie
        <input
          type='text'
          name={props.movie}
          placeholder='Enter Movie Title Here'
          value={props.movie}
          onChange={props.updateMovie}
        />
      </label>
      <button>Add Movie</button>
    </form>
  )

};

export default AddMovie;
