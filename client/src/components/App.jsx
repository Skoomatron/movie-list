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
  // state update methods
  updateQuery(query) {
    this.setState(query);
  }
  addMovieToList() {
    this.setState(); // finish this method
    }
  // default loading message
  componentDidMount() {
    console.log('mounted')
  }
  // render elements to the page
    // will individually render element per component class
    // include search form
    // include submit button
  render() {
    return (
    <div>
      <h1>Movie List</h1>
      <form>
      <label>
      <input name='search' type='text' placeholder='Search'/>
      </label>
      </form>
      <button>Search</button>
    </div>
    )
  }
}

export default App;


