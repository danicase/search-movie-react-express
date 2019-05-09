import React, { Component } from 'react'
import { connect } from 'react-redux'
import './singleMovie.scss'
class SingleMovie extends Component {

  showDescription = () => {
    let text = this.props.movie.overview;
    text = text.length > 100 ? text.slice(0, 100) + '...' : text;
    return (<p className='text'>
      {text}
    </p>)

  }

  showPicture = () => {
    const { base_url, poster_sizes } = this.props.imgConfig;
    return (<div className='image'>
      <img src={base_url + poster_sizes[2] + this.props.movie.poster_path}
        alt={this.props.movie.title}
      />
    </div>
    )
  }

  render() {
    return (
      <div className='movie-card'>
        <div className='movie-poster '>
          {this.showPicture()}
          <div className='movie-description'>
            <h4 className='movie-title'>
              {this.props.movie.title}
            </h4>
            {this.showDescription()}
          </div>
        </div>
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
