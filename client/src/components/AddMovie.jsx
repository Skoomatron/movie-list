import React, { Component } from 'react';
import MovieList from './MovieList.jsx';
// import movieArray from '../data/exampleMoviedata.js'

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: '',
      movieArray: [],
    }
    // bind methods to this
    this.submitMovie = this.submitMovie.bind(this);
    this.textInput = this.textInput.bind(this);
  }


  // process input text
  textInput(input) {
    //change movie state
      // on target
    this.setState({[input.target.name]: input.target.value});
  }
  // add a click hanlder to the class
    // pulls current field data on search bar
    // do I want a seperate form for searches and input
      // design choice
  submitMovie(input) {
    let currentInput = this.state.movie;
    let currentArray = [];
    // prevent default - stops react from sending synthetic events to the click handler?
    input.preventDefault();
    currentArray.push({title: currentInput});
    // when submit is called
      // should update the state to the query
    if (currentInput.length > 0) {
      // this.movieArray.push({title: currentInput});
      this.setState({movieArray: currentArray.concat(this.state.movieArray)});
    } else {
      console.error('Invalid Movie Title');
    }
    console.log(this.state.movieArray);

    // this.props.add(this.state.movie);
    // this.setState({movie: ''});
  }
  // move forms from app to add/search
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