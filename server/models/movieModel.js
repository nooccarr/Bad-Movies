//Select one db to work with:

// //For Mongo
// const mongoDb = require('../../db/mongodb')

//For SQL
const sqlDb = require('../../db/sql');

module.exports = {

  readAll: (callback) => {
    var queryStr = 'SELECT * FROM favorite';
    sqlDb.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },

  save: (params, callback) => {
    var queryStr = 'INSERT INTO favorite(id, title, release_date, vote_average, poster_path) VALUES (?, ?, ?, ?, ?)';
    sqlDb.query(queryStr, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },

  delete: (params, callback) => {
    var queryStr = 'DELETE FROM favorite WHERE id = ?';
    sqlDb.query(queryStr, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }
}