import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieListUI from '../../ui/MovieList/MovieList.ui'
class MovieList extends Component {

  render() {
    if (!this.props.imgConfig || !this.props.movieList) {
      return null;
    }
    return (
      < MovieListUI
        movieList={this.props.movieList}
        imgConfig={this.props.imgConfig}
        title='Search Result' />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.searchBarComponent.movieList,
    imgConfig: state.searchBarComponent.config.images
  }
}

export default connect(mapStateToProps)(MovieList);
