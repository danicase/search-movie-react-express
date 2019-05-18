import React, { Component } from 'react'
import { getMovieDetails } from '../../apis';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieDetailsActions from '../../actions/MovieDetails'
import SimilarMovies from '../SimilarMovies/SimilarMovies.component'

class MovieDetails extends Component {

  componentDidMount() {
    getMovieDetails(this.props.id)
      .then(res => {
        this.props.actions.getMovieDetails(res.data);
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      getMovieDetails(this.props.id)
        .then(res => {
          this.props.actions.getMovieDetails(res.data);
        })
    }
  }

  showPicture = () => {
    if (!this.props.imgConfig) {
      return null
    }
    const { base_url, poster_sizes } = this.props.imgConfig;
    return (<div className='image'>
      <img src={base_url + poster_sizes[3] + this.props.movieDetails.poster_path}
        alt={this.props.movieDetails.title}
      />
    </div>
    )
  }

  showGenres = () => {
    if (!this.props.movieDetails.genres) {
      return null
    }
    return this.props.movieDetails.genres.map(genre => {
      return (
        <div key={genre.id}>
          <button onClick={() => { console.log('clicked!') }}>
            {genre.name}
          </button>
        </div>
      )
    })
  }

  showReleaseDate = () => {
    const date = new Date(this.props.movieDetails.release_date);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
      <p> Release Date: {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</p>
    )
  }

  render() {
    if (!this.props.movieDetails) {
      return null;
    }

    const { title, tagline, overview } = this.props.movieDetails
    return (
      <div>
        <h1>
          {title}
        </h1>
        <h4>{tagline}</h4>
        {this.showPicture()}
        <div>
          {this.showReleaseDate()}
          <p>{overview}</p>
        </div>
        {this.showGenres()}
        <SimilarMovies id={this.props.movieDetails.id} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetails: state.movieDetailsComponent.movieDetails,
    imgConfig: state.searchBarComponent.config.images
  }
}

const mapDispatchToPros = (dispatch) => {
  return {
    actions: bindActionCreators(movieDetailsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToPros)(MovieDetails)
