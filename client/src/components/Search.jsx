import React from 'react';

// make this a class component
class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      searchText: '',
    }
    this.textInput = this.textInput.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }
  // methods can be similar to add movie
  textInput(input) {
    //change movie state
      // on target
    this.setState({[input.target.name]: input.target.value});
  }
  // needs a submission handler
  submitSearch(search) {
    // prevent default
    const currentSearch = this.state.searchText;
    search.preventDefault();
    console.log('search submitted', currentSearch);
    // should filter movie data on submit
  }



  // might want to render this seperately
  render() {
    const {searchText} = this.state;
    return (
      <form onSubmit={this.submitSearch}>
        <label>
          Search
          <input
            name='searchText' // equal to this.state
            type='text'
            placeholder='Search Movies Here'
            value={searchText}
            onChange={this.textInput}
            />
        </label>
        <button>Submit Search</button>
      </form>
    )
  }
}

export default Search;