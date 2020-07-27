import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" action="">
        <label htmlFor="search-bar">Image Search</label>
        <input type="text" className="field" name="search-bar" id="search-bar"/>
        </form>
      </div>
    )
  }
}

export default SearchBar;