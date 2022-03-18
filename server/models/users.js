var db = require('../db');

module.exports = {
  getAll: function (callback) {
    let queryString = 'SELECT * FROM users';
    db.query(queryString, function (err, results) {
      callback(err, results);
    });
  },
  create: function (params, callback) {
    let queryString = 'INSERT into users(username) VALUE (?)';
    db.query(queryString, params, function (err, results) {
      callback(err, results);
    });
  }
};
