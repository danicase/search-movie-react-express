import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as searchBarActions from '../actions/SearchBar'
import MovieDBAPI from '../apis/MoviesDatabase'
import { bindActionCreators } from 'redux';
class SearchBar extends Component {

  onSubmitForm = (e) => {
    e.preventDefault();
    MovieDBAPI.get('/search/' + this.props.inputValue)
      .then(res => {
        this.props.actions.getMovieList(res.data)
      })
  }

  updateInput = (e) => {
    this.props.actions.updateInput(e.target.value)
  }

  componentDidMount() {
    MovieDBAPI.get('/getConfig')
      .then(res => {
        this.props.actions.getConfig(res.data)
      });
  }

  render() {
    return (
      <div className='search-bar'>
        <form onSubmit={this.onSubmitForm} className='ui form'>
          <label>Search Movie</label>
          <input type="text" value={this.props.inputValue} placeholder='Search a Movie'
            onChange={this.updateInput}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    inputValue: state.searchBarComponent.inputValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(searchBarActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
