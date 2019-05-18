import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import MovieListUI from '../../ui/MovieList/MovieList.ui'
import { searchSimilarMovies } from '../../apis'
import * as similarMoviesActions from '../../actions/SimilarMovies'

class SimilarMovies extends Component {

  componentDidMount() {
    searchSimilarMovies(this.props.id)
      .then(res => {
        this.props.actions.storeSimilarMovies(res.data)
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      searchSimilarMovies(this.props.id)
        .then(res => {
          this.props.actions.storeSimilarMovies(res.data)
        })
    }
  }
  render() {
    if (!this.props.similarMovies) {
      return null
    }

    return (
      <MovieListUI
        movieList={this.props.similarMovies}
        imgConfig={this.props.imgConfig}
        title='You may also like' />
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    similarMovies: state.similarMoviesComponent.similarMovies,
    imgConfig: state.searchBarComponent.config.images
  }
}
const mapDispatchToPros = (dispatch) => {
  return {
    actions: bindActionCreators(similarMoviesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToPros)(SimilarMovies);
