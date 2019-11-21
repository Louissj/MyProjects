var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let User = new Schema({
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
    gender: {
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
    dob: {
        type: Date,
        trim: true,
        lowercase: true
    },
    country: {
        type: String,
        trim: true,
        lowercase: true
    },
    state: {
        type: String,
        trim: true,
        lowercase: true
    },
    city: {
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


module.exports = mongoose.model('User', User);
