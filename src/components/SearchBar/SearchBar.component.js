import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as searchBarActions from '../../actions/SearchBar';
import MovieDBAPI from '../../apis/MoviesDatabase';
import './searchBar.scss'
class SearchBar extends Component {

  onSubmitForm = (e) => {
    e.preventDefault();
    MovieDBAPI.get('/search/' + this.props.inputValue)
      .then(res => {
        this.props.actions.getMovieList(res.data);
      })
  }

  updateInput = (e) => {
    this.props.actions.updateInput(e.target.value);
  }

  componentDidMount() {
    MovieDBAPI.get('/getConfig')
      .then(res => {
        this.props.actions.getConfig(res.data);
      });
  }

  render() {
    return (
      <div className='search-bar'>
        <form onSubmit={this.onSubmitForm} className='movie-input'>
          <div>
            <input id='searchInput' type="text" value={this.props.inputValue} placeholder='Search a Movie'
              onChange={this.updateInput}
            />
          </div>
          <div>
            <button className='btn-search' type='submit'>Search</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
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
