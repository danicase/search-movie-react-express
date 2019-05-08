import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar.component'
import './header.scss'
export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <SearchBar />
      </div>
    )
  }
}
