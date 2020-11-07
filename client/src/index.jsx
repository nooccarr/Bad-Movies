import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [],
      favorites: [],
      showFaves: false,
    };

    // you might have to do something important here!
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
  }

  componentDidMount() {
    this.getFavorites();
  }

  getMovies(response) {
    // make an axios request to your server on the GET SEARCH endpoint
    this.setState({
      movies: response.data.results
    });
  }

  getFavorites() {
    return axios
      .get('/movies/favorites')
      .then(response => this.setState({
        favorites: response.data
      }))
      .catch(err => console.log(err));
  }


  saveMovie(id, title, release_date, vote_average, poster_path) {
    // same as above but do something diff
    return axios
      .post('/movies/save', {
        id: id,
        title: title,
        release_date: release_date,
        vote_average: vote_average,
        poster_path: poster_path
      })
      // .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  deleteMovie(id) {
    // same as above but do something diff
    return axios
      .delete('/movies/delete', {
        data: {id: id}
      })
      // .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar">
          <h1>Bad Movies</h1>
        </header>

        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves} getFavorites={this.getFavorites} saveMovie={this.saveMovie} deleteMovie={this.deleteMovie}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));