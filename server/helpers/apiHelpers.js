const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// write out logic/functions required to query TheMovieDB.org

// Don't forget to export your functions and require them within your server file

// get the search genre
// https://www.themoviedb.org/account/signup
// get your API KEY

// https://api.themoviedb.org/3/discover/movie

// and sort them by horrible votes using the search parameters in the API
let getMovieByName = (genreId, callback) => {
  return axios
    .get(
      'https://api.themoviedb.org/3/discover/movie',
      {
        params: {
          api_key: API_KEY,
          with_genres: genreId,
          sort_by: 'popularitty_asc'
        }
      })
    // .then(res => console.log(res))
    .then(result => callback(null, result))
    .catch(err => callback(err));
};

// make an axios request to get the list of official genres

// use this endpoint to search for movies by genres, you will need an API key

// use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list

// send back

let getMoviesByGenre = (callback) => {
  // var options = {
  //   type: 'get',
  //   url: 'https://api.themoviedb.org/3/genre/movie/list',
  //   params: { api_key: API_KEY }
  // }

  // return axios(options)
  return axios
    .get(
      'https://api.themoviedb.org/3/genre/movie/list',
      {
        params: {
          api_key: API_KEY
        }
      }
    )
    .then(response => callback(null, response))
    .catch(err => callback(err));

};

module.exports = {
  getMovieByName,
  getMoviesByGenre
};
