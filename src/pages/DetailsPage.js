import React, { Component } from 'react'
import Header from '../components/Header/Header.component';
import MovieDetailsComponent from '../components/MovieDetails/MovieDetails.component';

export default class DetailsPage extends Component {
  render() {
    console.log('DetailsPage');
    console.log(this.props);
    return (
      <div>
        <Header />
        <div className=''>
          <MovieDetailsComponent match={this.props.match} />
        </div>
      </div>
    )
  }
}
