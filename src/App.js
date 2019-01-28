import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetail from './FilmDetail';
import TMDB from './TMDB';

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: TMDB.films,
      current: {}
    }
}

handleDetailsClick = (film) => {
  console.log("Fetching details for", film.title);
  const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`

  fetch(url)
  .then(response => response.json())
  .then(json => {
    this.setState( {current: json} )
  })
  .catch(err => {
    console.log("Error with fetch", err);
  })
  console.log("Fetch", film.title);
}

  render() {
    return (
      <div className="App">
        <div className="film-library">

          {/* <FilmListing films={TMDB.films} current={this.props.current}/>
          <FilmDetail films={TMDB.films} current={this.props.current}/> */}

          <FilmListing films={this.state.films} 
          handleDetailsClick={this.handleDetailsClick}
          />
          <FilmDetail film={this.state.current}/>
        
        </div>
      </div>
    );
  }
}

export default App;
