import React, { Component } from 'react'
import SingleMovieUI from '../SingleMovie/SingleMovie.ui'
import './movieList.scss'
export default class MovieListUI extends Component {

  showMovies = () => {
    if (this.props.movieList.total_results === 0) {
      return <h1>No Movie Found</h1>;
    }
    return this.props.movieList.results.map(movie => {
      return (
        <SingleMovieUI
          key={movie.id}
          movie={movie}
          imgConfig={this.props.imgConfig}
        />
      )
    })
  }
  render() {
    return (
      <div className='movie-list'>
        <h1>{this.props.title}</h1>
        <div className="order-list">
          {this.showMovies()}
        </div>
      </div>
    )
  }
}
