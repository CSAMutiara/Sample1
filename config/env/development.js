module.exports = {
    db_uri: 'mongodb://amutiara-cs3051-5326061:27017/cs3051',
    db: function(callback) {
        var MongoClient = require('mongodb').MongoClient
        MongoClient.connect(this.db_uri, callback)
    }
};