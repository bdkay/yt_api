// Generate no-frills HTML input
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return <input onChange={(event) => console.log(event.target.value)} />;
  }
};

// new SearchBar (instance ex)

export default SearchBar;
