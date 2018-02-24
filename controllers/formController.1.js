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
var formSchema = new mongoose.Schema({
    name: String,
    item: String
});

var formdSchema = new mongoose.Schema({
    name: String,
    item: String
});

//model
var Form = mongoose.model('Form', formSchema);
var Formd = mongoose.model('Formd', formdSchema);

// var data = [{item: 'make bed'}, {item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    
    app.get('/form', function(req, res){
        //get data from mongodb and pass it to view
        Form.find({}, function(err, data){
            if (err) throw err;
            res.render('form', {links: data});
        });
    });
    
    app.get('/formd', function(req, res){
        //get data from mongodb and pass it to view
        Formd.find({}, function(err, data){
            if (err) throw err;
            res.render('formd', {links: data});
        });
    });
    
    app.post('/form', urlencodedParser, function(req, res){
        //get data from the view and add it to mongodb
        var newForm = Form(req.body).save(function(err, data){
            if (err) throw err;
            //res.json(data);
        })
    });
    
    app.post('/formd', urlencodedParser, function(req, res){
        //get data from the view and add it to mongodb
        var newFormd = Formd(req.body).save(function(err, data){
            if (err) throw err;
            //res.json(data);
        })
    });
    
    app.delete('/form/:name', function(req, res){
        //delete the requested item from mongodb
        Form.find({name: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
            if (err) throw err;
            res.json(data);
        });
    });
    
    app.delete('/formd/:name', function(req, res){
        //delete the requested item from mongodb
        Formd.find({name: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
            if (err) throw err;
            res.json(data);
        });
    });
    
};