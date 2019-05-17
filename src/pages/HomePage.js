import React, { Component } from 'react'
import MovieListComponent from '../components/MovieList/MovieList.component';
import Header from '../components/Header/Header.component';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className=''>
          <MovieListComponent />
        </div>
      </div>
    )
  }
}
