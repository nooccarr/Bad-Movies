const mysql = require('mysql');
const mysqlConfig = require('../../config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected!');
  }
});

module.exports = connection;