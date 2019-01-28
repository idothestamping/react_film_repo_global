import React, { Component } from 'react';

class FilmPoster extends Component {
  render() {
    const posterUrl = `https://image.tmdb.org/t/p/w780${this.props.poster_path}`
    return (
        <div>
             <img src={posterUrl} alt="" />
        </div>
       
    );
  }
}

export default FilmPoster;