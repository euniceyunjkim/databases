let db = require('../db');

module.exports = {
  getAll: function (callback) {
    // fetch all messages
    // text, username, roomname, id
    let queryString = 'SELECT messages.id, messages.text, messages.roomname, users.username \ FROM messages LEFT OUTER JOIN users ON (messages.userid = users.id) \ ORDER BY messages.id DESC';
    db.query(queryString, function(err, results) {
      callback(err, results);
    });
  },

  create: function (params, callback) {
    // create a message for a user id based on the given username
    let queryString = 'INSERT into messages(text, userid, roomname) \ VALUE (?, (SELECT id FROM users WHERE username = ? limit 1), ?)';
    db.query(queryString, params, function(err, results) {
      callback(err, results);
    });
  }
};
