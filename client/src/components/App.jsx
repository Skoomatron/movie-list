import React, {Component} from 'react';
import Movies from './MovieList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      query: '',
    }
  }

  updateSearch() {
    this.setState({query});
  }
  addMovieToList() {
    this.setState(); // finish this method
    }

  componentDidMount() {
    console.log('mounted')
  }

  render() {
    return (
    <div>
      <h1>Movie List</h1>
      <form>
      <label>
      <input name='search' type='tex' placeholder='Search'/>
      </label>
      </form>
      <button>Search</button>
      <Movies movies={this.movies}/>
    </div>
    )
  }
}

export default App;


