import React, { Component } from 'react'
import MovieDBAPI from '../../apis/MoviesDatabase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as movieDetailsActions from '../../actions/MovieDetails'

class MovieDetails extends Component {

  componentDidMount() {
    MovieDBAPI.get('/movie/' + this.props.match.params.id)
      .then(res => {
        this.props.actions.getMovieDetails(res.data);
      })
      .catch(e => {
        console.log(e)
      });
  }

  render() {
    return (
      <div>
        {this.props.movieDetails.title}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetails: state.movieDetailsComponent.movieDetails
  }
}

const mapDispatchToPros = (dispatch) => {
  return {
    actions: bindActionCreators(movieDetailsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToPros)(MovieDetails)
