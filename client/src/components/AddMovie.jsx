import React from 'react';
import MovieList from './MovieList.jsx';


const AddMovie = (props) => {

  const movies = props.movies; // pull movie from state

  return (
    <form onSubmit={props.submitMovie}>
      <label>
        Add Movie
        <input
          name='movie' // points to movie from state
          type='text'
          placeholder='Enter Movie Title Here'
          value={props.movie}
          onChange={props.textInput} // was missing a handler for the input field
        />
      </label>
      <button>Add Movie</button>
    </form>
  )
}

export default AddMovie;

// class AddMovie extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       movie: '',
//       movieArray: [],  // trying to access this right hya
//     }
//     this.submitMovie = this.submitMovie.bind(this);
//     this.textInput = this.textInput.bind(this);
//   }