import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBar: ''
    }
  }
  onSubmitForm = (e) => {
    e.preventDefault();
    console.log('Approva!');
  }
  render() {
    return (
      <div className='search-bar'>
        <form onSubmit={this.onSubmitForm} className='ui form'>
          <label>Search Movie</label>
          <input type="text" value={this.state.inputBar} placeholder='Search a Movie'
            onChange={(e) => { this.setState({ inputBar: e.target.value }); console.log('changed') }}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}


export default SearchBar;
