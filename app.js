//previously Napp
process.env.NODE_ENV = process.env.NODE_ENV || "development"

var express = require('express');
var linkController = require('./controllers/linkController');
//var linkbController = require('./controllers/linkbController');
var formController = require('./controllers/formController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'))

//fire controllers
linkController(app);
//linkbController(app);
formController(app);

var error = require('./config/error_handler');
error(app);

//listen to port
app.listen(process.env.PORT, process.env.IP);
console.log('You are listening to port 3000');

// sudo apt-get install -y mongodb-org
// mongod --bind_ip=$IP --nojournal

// sass --watch app/sass:public/stylesheets