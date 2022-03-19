import React from 'react';
import AddMovie from './AddMovie.jsx';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieArray: [{title: 'Braveheart'}, {title: 'Elf'}, {title: 'Star Wars'}],
      movie: '',
      search: '',
    }
    this.updateMovie = this.updateMovie.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.submitMovie = this.submitMovie.bind(this);
  }

  componentDidMount() {
    console.log('Mounted')
  }

  updateMovie(event) {
    var currentValue = event.target.value;
    this.setState({movie: currentValue});
  }

  updateSearch(event) {
    var currentValue = event.target.value;
    this.setState({search: currentValue})
  }

  submitSearch(event) {
    event.preventDefault();
    // how do I filter my array state without replacing it?
      // send to server?
    var userMovies = this.state.movieArray;
    for (var x = 0; x < userMovies.length; x++) {
      console.log(userMovies[x].title);
    }
  }

  submitMovie(event) {
    event.preventDefault();

    let currentInput = this.state.movie;
    let currentArray = [];

    currentArray.push({title: currentInput});

    if (currentInput.length > 0) {
      this.setState({movieArray: currentArray.concat(this.state.movieArray)});
      } else {
    }
    this.setState({movie: ''});
  }




  render() {
    const {movies} = this.state;
    return (
    <div>
      <h1>Movie List</h1>
      <AddMovie updateMovie={this.updateMovie} movie={this.state.movie} submitMovie={this.submitMovie}/>
      <Search updateSearch={this.updateSearch} search={this.state.search} submitSearch={this.submitSearch}/>
      <MovieList movieArray={this.state.movieArray} submitSearch={this.submitSearch}/>
    </div>
    )
  }
}

export default App;


