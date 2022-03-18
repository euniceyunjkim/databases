var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll(function(err, results) {
      if (err) {
        res.sendStatus(500);
        console.log('there\'s an error');
      } else {
        res.json(results);
      }
    });
  },
  post: function (req, res) {
    let params = [req.body.username];
    models.users.create(params, function(err, results) {
      if (err) {
        res.sendStatus(500);
        console.log('hey we failed to post');
      } else {
        res.sendStatus(201);
      }
    });
  }
};
