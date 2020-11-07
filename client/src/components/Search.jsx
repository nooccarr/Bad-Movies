import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };
    this.getGenres = this.getGenres.bind(this);
    this.getMoviesByGenre = this.getMoviesByGenre.bind(this);
    // this.handleClickSearch = this.handleClickSearch.bind(this);
  }

  componentDidMount() {
    this.getGenres();
    this.getMoviesByGenre();
  }

  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    return axios
      .get('/movies/genres')
      .then(response => {
        this.setState({
          genres: response.data.genres,
          selectedId: response.data.genres[0].id
        });
      })
      .catch(err => console.log(err));
  }

  getMoviesByGenre() {

    return axios
      .get('/movies/search', {
        params: {
          genreId: this.state.selectedId
        }
      })
      .then(response => this.props.getMovies(response))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}
        <select onChange={(e) => {
          this.setState({
            selectedId: e.target.value
          });
        }}>
          {this.state.genres.map((genre, idx) => {
            return <option value={genre.id} key={idx}>{genre.name}</option>
          })}
        </select>
        <br/><br/>

        <button onClick={this.getMoviesByGenre}>Search</button>

      </div>
    );
  }
}

export default Search;