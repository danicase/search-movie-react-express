import React, { Component } from 'react'
import {connect} from 'react-redux'

class SingleMovie extends Component {

  showPicture = () => {
    const {base_url, poster_sizes} = this.props.imgConfig;
    return <div>
      <img src={base_url + poster_sizes[2] + this.props.movie.poster_path } alt={this.props.movie.title}/>
    </div>
  }
  
  render() {
    return (
      <div>
        {this.props.movie.title}
        {this.showPicture()}
      </div>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    imgConfig : state.searchBarComponent.config.images
  }
}

export default connect(MapStateToProps)(SingleMovie)
