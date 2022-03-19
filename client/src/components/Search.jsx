import React from 'react';

const Search = (props) => {

    return (
      <form onChange={props.submitSearch}>
        <label>
          Search
          <input
            name='searchText'
            type='text'
            placeholder='Search Movies Here'
            value={props.search}
            onChange={props.updateSearch}
            />
        </label>
        <button>Submit Search</button>
      </form>
    )
  };

export default Search;