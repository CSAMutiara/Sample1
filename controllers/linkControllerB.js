var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://amutiara-cs3051-5326061:27017/cs3051', {
    useMongoClient: true
});

var connection = mongoose.connection;

//Create a schema - this is like a blueprint
var linkSchema = new mongoose.Schema({
    name: String,
    item: String,
    details: String,
    date: String,
    category: String
});
var linkbSchema = new mongoose.Schema({
    name: String,
    item: String,
    details: String,
    date: String,
    category: String
});
var linkcSchema = new mongoose.Schema({
    name: String,
    item: String,
    details: String,
    date: String,
    category: String
});
var linkdSchema = new mongoose.Schema({
    name: String,
    item: String,
    details: String,
    date: String,
    category: String
});

//model
var Link = mongoose.model('Link', linkSchema);
var Linkb = mongoose.model('Linkb', linkbSchema);
var Linkc = mongoose.model('Linkc', linkcSchema);
var Linkd = mongoose.model('Linkd', linkcSchema);

// var data = [{item: 'make bed'}, {item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    
    app.get('/link', function(req, res){
        //get data from mongodb and pass it to view
        Link.find({}, function(err, data){
            if (err) throw err;
            res.render('link', {links: data});
        });
    });
    
    app.get('/linkb', function(req, res){
        //get data from mongodb and pass it to view
        Link.find({}, function(err, data){
            if (err) throw err;
            res.render('linkb', {links: data});
        });
    });
    
    app.get('/linkc', function(req, res){
        //get data from mongodb and pass it to view
        Link.find({}, function(err, data){
            if (err) throw err;
            res.render('linkc', {links: data});
        });
    });
    
    app.get('/linkd', function(req, res){
        //get data from mongodb and pass it to view
        Link.find({}, function(err, data){
            if (err) throw err;
            res.render('linkd', {links: req.query});
        });
    });
    
    app.post('/link', urlencodedParser, function(req, res){
        //get data from the view and add it to mongodb
        var newLink = Link(req.body).save(function(err, data){
            if (err) throw err;
            res.render('linkd', {links: data});
        })
    });
    
    app.post('/linkb', urlencodedParser, function(req, res){
        //get data from the view and add it to mongodb
        var newLink = Link(req.body).save(function(err, data){
            if (err) throw err;
            // res.json(data);
        })
    });
    
    
    app.post('/linkc', urlencodedParser, function(req, res){
        //get data from the view and add it to mongodb
        var newLink = Link(req.body).save(function(err, data){
            if (err) throw err;
            // res.json(data);
        })
    });
    
    app.post('/linkd', urlencodedParser, function(req, res){
        //get data from the view and add it to mongodb
        var newLink = Link(req.body).save(function(err, data){
            if (err) throw err;
            console.log(req.body);
            res.render('linkd', {links: data});
            // res.json(data);
        })
    });
    
    app.delete('/link/:name', function(req, res){
        //delete the requested item from mongodb
        Link.find({name: req.params.name.replace(/\-/g, " ")}){
            
        };
        
    });
    
    app.delete('/linkb/:name', function(req, res){
        //delete the requested item from mongodb
        Link.find({name: req.params.name.replace(/\-/g, " ")}).remove(function(err,data){
            if (err) throw err;
            res.json(data);
        });
    });
    
    app.delete('/linkc/:name', function(req, res){
        //delete the requested item from mongodb
        Link.find({name: req.params.name.replace(/\-/g, " ")}).remove(function(err,data){
            if (err) throw err;
            res.json(data);
        });
    });
    
    app.delete('/linkd/:name', function(req, res){
        //delete the requested item from mongodb
        Link.find({name: req.params.name.replace(/\-/g, " ")}).remove(function(err,data){
            if (err) throw err;
            res.json(data);
            res.render('linkd', {links: data});
        });
    });
    
};