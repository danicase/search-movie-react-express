import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from '../../utils'
import SingleMovie from '../SingleMovie/SingleMovie.component'

class MovieList extends Component {

  showMovies = () => {
    if (isEmpty(this.props.movieList)) {
      return null;
    }
    return this.props.movieList.results.map(movie => {
      return (
        <SingleMovie key={movie.id} movie={movie} />)
    })
  }
  render() {
    return (
      <div>
        <h1>Search Result</h1>
        {this.showMovies()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    movieList: state.searchBarComponent.movieList
  }
}
export default connect(mapStateToProps)(MovieList);
