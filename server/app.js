// Express is a web application framework for Node that is used for designing and building web applications quickly and easily - Allows you to define routes of our application based on HTTP methods and URLs.
var express = require('express');
var db = require('./db');

// Middleware
// morgan is used to log HTTP requests and errors, and simplifies the process
var morgan = require('morgan');
// CORS is an HTTP-header based mechanism
var cors = require('cors');

// Router
// routing request methods
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

