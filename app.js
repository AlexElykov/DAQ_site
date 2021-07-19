const express = require('express');
const createError = require('http-errors');
const expressLayouts = require('express-ejs-layouts');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// hash passwords
var bcrypt = require('bcrypt');

// mongoDB with monk
var mongo = require('mongodb');
var ObjectID = mongo.ObjectID;
var monk = require('monk');


// Using my a single test mongo Atlas
var cstr = "mongodb://admin:" + process.env.ATLAS_ADMIN_PASSWORD +
process.env.RUN_DB_URL;
var runs_db = monk(cstr);
var users_db = monk(cstr);
var db = monk(cstr);


const app = express();

// EJS view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set(expressLayouts);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Using all the routes -------------------------------------------------------
app.use('/', require('./routes/index'));
app.use('/login', require('./routes/login'));
app.use('/register',require('./routes/register'));


// ----------------------------------------------------------------------------

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


// Listening to a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));

module.exports = app;
