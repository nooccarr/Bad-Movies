const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');

const bodyParser = require('../index');

//Return requests to the client
module.exports = {

  getSearch: (req, res) => {
    var params = req.query.genreId;
    apiHelpers.getMovieByName(params, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.json(result.data);
      }
    });
  },

  getGenres: (req, res) => {
    apiHelpers.getMoviesByGenre((err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.json(result.data);
      }
    })
  },

  getAllMovies: (req, res) => {
    movieModel.readAll((err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.json(result);
      }
    })
  },

  saveMovie: (req, res) => {
    var params = [req.body.id, req.body.title, req.body.release_date, req.body.vote_average, req.body.poster_path];
    movieModel.save(params, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    })
  },

  deleteMovie: (req, res) => {
    var params = [req.body.id];
    movieModel.delete(params, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.sendStatus(200);
      }
    })
  }
}