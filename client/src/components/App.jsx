import React, {Component} from 'react';
import Movies from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';
import Search from './Search.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      query: '',
    }
    // bind methods to this
    this.updateQuery = this.updateQuery.bind(this);
    this.addMovie = this.addMovieToList.bind(this);
  }
  // state update methods
  updateQuery(query) {
    this.setState({query});
  }
  addMovieToList(movie) {
    this.setState({movies: [...this.state.movies, {title: movie}]}); // finish this method
    }
  // default loading message
  componentDidMount() {
    // console log can be removed, just a verification
    console.log('Mounted')
  }
  // render elements to the page
    // will individually render element from components

  render() {
    const {movies} = this.state;
    return (
    <div>
      <h1>Movie List</h1>
      <AddMovie add={this.addMovie}/>
      <Search updateQuery={this.udpateQuery}/>
      <Movies />
    </div>
    )
  }
}

export default App;


