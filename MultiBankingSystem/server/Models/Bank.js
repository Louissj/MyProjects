var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let Bank = new Schema({
    firstName: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        default: null
    },
    bankName: {
        type: String,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        select:false
    },
    phone: {
        type: String,
        trim: true,
        lowercase: true
    },
    branch: {
        type: String,
        trim: true,
        lowercase: true
    },
    status: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});


module.exports = mongoose.model('Bank', Bank);
