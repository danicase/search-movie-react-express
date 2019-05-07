import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies, fetchConfig } from '../actions'
import MovieDBBaseUrl from '../apis/MoviesDatabase'
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBar: '',
      config: {}
    }
  }

  onSubmitForm = (e) => {
    e.preventDefault();
  }

  componentDidMount() {
    MovieDBBaseUrl.get('/getConfig')
      .then(res => {
        const config = res.data;
        this.setState({ config })
      });
  }

  render() {
    console.log(this.state.config)
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


export default connect(null, { fetchMovies, fetchConfig })(SearchBar);
