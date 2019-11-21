var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let admin = new Schema({
    username: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    password: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
});


module.exports = mongoose.model('admin', admin);