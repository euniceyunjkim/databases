var models = require('../models');

module.exports = {

  get: function(req, res) {
    models.messages.getAll(function (err, results) {
      if (err) {
        res.sendStatus(500);
        console.log('there\'s an error');
      } else {
        // why do we not send status 200?
        res.json(results);
      }
    });
  },

  post: function(req, res) {
    let params = [req.body.message, req.body.usernname, req.body.roomname];
    //are the params based on what we had specified in our server-spec.js file?
    models.messages.create(params, function (err, results) {
      if (err) {
        res.sendStatus(500);
        console.log('hey we failed to post');
      } else {
        res.sendStatus(201);
      }
      //why do we not use an else here?
      //201 = created!
    });
  }

};

