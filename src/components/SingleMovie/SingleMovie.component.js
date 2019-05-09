import React, { Component } from 'react'
import { connect } from 'react-redux'
import './singleMovie.scss'
class SingleMovie extends Component {

  showPicture = () => {
    const { base_url, poster_sizes } = this.props.imgConfig;
    return <div className='movie-poster'>
      <img src={base_url + poster_sizes[2] + this.props.movie.poster_path} alt={this.props.movie.title} />
    </div>
  }

  render() {
    return (
      <div className='movie-card'>
        <h4 className='movie-title'>
          {this.props.movie.title}
        </h4>
        {this.showPicture()}
        <p className='movie-description'>
          {this.props.movie.overview}
        </p>
      </div>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    imgConfig: state.searchBarComponent.config.images
  }
}

export default connect(MapStateToProps)(SingleMovie)
