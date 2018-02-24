var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function() {
    var app = express();
    
    // change of dir!
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    
    if (process.env.NODE_ENV === 'development') {
        app.use(logger('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(bodyParser.json());
        app.use(cookieParser());
        app.use(express.static('public'));
    }
    return app;
};