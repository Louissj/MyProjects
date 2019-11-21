var mongoose = require('mongoose');
mongoose.set('debug', true);
var config = require("../Utilities/config").config;

module.exports = function() {
    mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.DB_URL.url, { useNewUrlParser: true });
    require('../Models/User');
    return db;
};

module.exports = function() {
    mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.DB_URL.url, { useNewUrlParser: true });
    require('../Models/Bank');
    return db;
};
module.exports = function() {
    mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.DB_URL.url, { useNewUrlParser: true });
    require('../Models/BankSignup');
    return db;
};
module.exports = function() {
    mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.DB_URL.url, { useNewUrlParser: true });
    require('../Models/accounttype');
    return db;
};
module.exports = function() {
    mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.DB_URL.url, { useNewUrlParser: true });
    require('../Models/Admin');
    return db;
};