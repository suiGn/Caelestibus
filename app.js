/*
┌─┐┌─┐┌─┐┬  ┌─┐┌─┐┌┬┐┬┌┐ ┬ ┬┌─┐
│  ├─┤├┤ │  ├┤ └─┐ │ │├┴┐│ │└─┐
└─┘┴ ┴└─┘┴─┘└─┘└─┘ ┴ ┴└─┘└─┘└─┘
mdrnChurch
*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const routes = require("./routes");
const PORT = process.env.PORT || 3000;
var Telnet = require('telnet-client');
var connection = new Telnet();

// these parameters are just examples and most probably won't work for your use-case.
var params = {
  host: 'horizons.jpl.nasa.gov',
  port: 6775,
  negotiationMandatory: false,
  timeout: 1500,
  // removeEcho: 4
}
 
connection.on('ready', function(prompt) {
  connection.exec(cmd, function(err, response) {
    console.log(response)
  })
})
 
connection.on('timeout', function() {
  console.log('socket timeout!')
  connection.end()
})
 
connection.on('close', function() {
  console.log('connection closed')
})
 
connection.connect(params)

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs")
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
app.get("/", routes.home);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

});

module.exports = app;
