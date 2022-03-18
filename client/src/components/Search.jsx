import React from 'react';

// make this a class component
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
    }
  }


  // needs a submission handler
  submitSearch(query) {
    // prevent default
    // update state to query value from input
  }

  // might want to render this seperately
}

export default Search;