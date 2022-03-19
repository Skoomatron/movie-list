import React from 'react';
import Movies from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      query: '',
    }
    this.updateQuery = this.updateQuery.bind(this);
    this.addMovie = this.addMovieToList.bind(this);
  }

  updateQuery(query) {
    this.setState({query});
  }
  addMovieToList(movie) {
    this.setState({movies: [...this.state.movies, {title: movie}]});
    }
  componentDidMount() {
    console.log('Mounted')
  }


  render() {
    const {movies} = this.state;
    return (
    <div>
      <h1>Movie List</h1>
      <AddMovie add={this.addMovie}/>
      <Search updateQuery={this.udpateQuery}/>
      <Movies movies={this.state.movies}/>
    </div>
    )
  }
}

export default App;


