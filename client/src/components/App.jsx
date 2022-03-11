import React from 'react';
import movies from '../data/exampleMovieData.js';

@param {movies} object

const App = (props) => (


  <div>
    <h2>Movie List</h2>
    {movies.map(movies => (
      <p>{movies.title}</p>
    ))}
  </div>

);

export default App;