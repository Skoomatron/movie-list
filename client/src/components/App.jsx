import React from 'react';
import Movies from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movieArray: [],
      movie: '',
      search: '',
    }
    // this.updateQuery = this.updateQuery.bind(this);
    this.addMovie = this.addMovieToList.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.submitMovie = this.submitMovie.bind(this);
    this.textInput = this.textInput.bind(this);
  }
  componentDidMount() {
    console.log('Mounted')
  }
  // updateQuery(query) {
  //   this.setState({query});
  // }
  addMovieToList(movie) {
    this.setState({movies: [...this.state.movies, {title: movie}]});
    }


  submitSearch(search) {
    const currentSearch = this.state.search;
    search.preventDefault();
    console.log('search submitted', currentSearch);
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

  textInput(input) {
    this.setState({[input.target.name]: input.target.value});
  }


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


