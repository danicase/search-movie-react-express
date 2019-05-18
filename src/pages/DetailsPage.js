import React, { Component } from 'react'
import Header from '../components/Header/Header.component';
import MovieDetailsComponent from '../components/MovieDetails/MovieDetails.component';

export default class DetailsPage extends Component {

  componentDidUpdate() {
    // access the DOM is an antipattern! need to think of a better solution
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }
  render() {
    return (
      <div>
        <Header />
        <MovieDetailsComponent id={this.props.match.params.id} />
      </div>
    )
  }
}
