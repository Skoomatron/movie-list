import React from 'react';
import MovieList from './MovieList.jsx';




class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: '',
      movieArray: [],  // trying to access this right hya
    }
    this.submitMovie = this.submitMovie.bind(this);
    this.textInput = this.textInput.bind(this);
  }

  textInput(input) {

    this.setState({[input.target.name]: input.target.value});
  }

  submitMovie(input) {
    let currentInput = this.state.movie;
    let currentArray = [];
    currentArray.push({title: currentInput});

    input.preventDefault();

    if (currentInput.length > 0) {
      this.setState({movieArray: currentArray.concat(this.state.movieArray)});
    } else {
      console.error('Invalid Movie Title');
    }
    console.log(this.state.movieArray);
  }

  render() {
    const {movie} = this.state; // pull movie from state
    return (
      <form onSubmit={this.submitMovie}>
        <label>
          Add Movie
          <input
            name='movie' // points to movie from state
            type='text'
            placeholder='Enter Movie Title Here'
            value={movie}
            onChange={this.textInput} // was missing a handler for the input field
          />
        </label>
        <button>Add Movie</button>
      </form>
    )
  }
}





export default AddMovie;