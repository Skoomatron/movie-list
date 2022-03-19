import React from 'react';

// make this a class component
// class Search extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       searchText: '',
//     }
//     this.textInput = this.textInput.bind(this);
//     this.submitSearch = this.submitSearch.bind(this);
//   }

const Search = (props) => {

    const searchText = props.search;

    return (
      <form onSubmit={props.submitSearch}>
        <label>
          Search
          <input
            name='searchText' // equal to this.state
            type='text'
            placeholder='Search Movies Here'
            value={searchText}
            onChange={props.textInput}
            />
        </label>
        <button>Submit Search</button>
      </form>
    )
  }

export default Search;