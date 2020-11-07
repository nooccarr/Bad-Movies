import React from 'react';

// Make an onClick for each list item. If the movies shown is the search results,
// onClick add it to the database (do it in the main app, and pass down the function)

// If you're currently showing the fave list, delete the movie instead
// You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)


class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id, title, release_date, vote_average, poster_path) {
    if (!this.props.showFaves) {
      this.props.saveMovie(id, title, release_date, vote_average, poster_path);
    } else {
      this.props.deleteMovie(id);
    }
    this.props.getFavorites();
  }

  render() {

    return (
      <ul className="movies">
        {this.props.movies.map((movie, idx) => {
          return (<li className="movie_item" key={idx} onClick={() => this.handleOnClick(movie.id, movie.title, movie.release_date, movie.vote_average, movie.poster_path)}>
            {/* <img src={`https://lh3.googleusercontent.com${movie.poster_path}`} /> */}
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <div className="movie_description">
              <h2>{movie.title}</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>{movie.release_date}</span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>{movie.vote_average}</span>
                </div>
              </section>
            </div>
          </li>);
        })}
      </ul>
    );
  }
}


export default Movies;