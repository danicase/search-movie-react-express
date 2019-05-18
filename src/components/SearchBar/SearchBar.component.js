import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchBarActions from '../../actions/SearchBar';
import { getConfig, searchMovies } from '../../apis';
import { withRouter } from 'react-router-dom'
import './searchBar.scss'

class SearchBar extends Component {

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.history.push('/');
    searchMovies(this.props.inputValue.trim())
      .then(res => {
        this.props.actions.getMovieList(res.data);
      })
  }

  updateInput = (e) => {
    this.props.actions.updateInput(e.target.value);
  }

  componentDidMount() {
    getConfig()
      .then(res => {
        this.props.actions.getConfig(res.data);
      });
  }

  render() {
    return (
      <div className='search-bar'>
        <form onSubmit={this.onSubmitForm} className='movie-search-form'>
          <input id='searchInput' type="text"
            className='movie-input'
            value={this.props.inputValue}
            placeholder='Search a Movie'
            onChange={this.updateInput}
          />
          <button className='btn-search' type='submit'>Search</button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
